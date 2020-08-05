import {Request,Response} from 'express'

import connection from '../database/connection'
import convertHourToMinute from '../utils/convertHourToMinutes'

interface ScheduleItem {
    week_day:number
    from:string
    to:string
}

class ClassesController {
        async index(request:Request,response:Response){
            const { 
                week_day , 
                subject , 
                time 
            } = request.query as {[key:string]:string}

            if(!(week_day && subject && time)){
                return response.status(400).json({
                    error:"Missing filters to search classes"
                })
            }

            const timeInMinutes = convertHourToMinute(time)

            const classes = await connection('classes')
                .whereExists(function(){
                    this.select('class_schedule.*')
                        .from('class_schedule')
                        .whereRaw('`class_schedule`.`class_id` = `classes`.`id` ')
                        .whereRaw('`class_schedule`.`week_day` = ??',[Number(week_day)])
                        .whereRaw('`class_schedule`.`from` <= ??',[timeInMinutes])
                        .whereRaw('`class_schedule`.`to` > ??',[timeInMinutes])
                })
                .where('classes.subject','=', subject)
                .join('users','classes.user_id','=','users.id')
                .select(['classes.*','users.*'])

            return response.status(200).json(classes)

        }

        async create(request:Request,response:Response){

            const {
                name,
                avatar,
                whatsapp,
                bio,
                subject,
                cost,
                schedule,
            } = request.body
        
            const transaction = await connection.transaction()
        
            try {
                const insertedUserIds =  await transaction('users').insert({
                    name,avatar,whatsapp,bio
                })
            
                const user_id = insertedUserIds[0]
            
                const insertedClassesIds =  await transaction('classes').insert({
                    subject,cost,user_id
                })
            
                const class_id = insertedClassesIds[0]
            
                const classSchedule = schedule.map((scheduleItem:ScheduleItem)=>{
                    const {from,to} = scheduleItem
            
                    return {
                        ...scheduleItem,
                        from:convertHourToMinute(from),
                        to:convertHourToMinute(to),
                        class_id
                    }
                })
            
                await transaction("class_schedule").insert(classSchedule)
            
                await transaction.commit()
            
                return response.status(201).json('success')
        
            } catch (error) {
                await transaction.rollback()
        
                return response.status(400).json({
                    error:"Unexpected error while creating a new class :("
                })
            }
        }
    }

    export default new ClassesController()
