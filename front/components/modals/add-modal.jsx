"use client"

import { useModal } from '@/hooks/use-modal-hook'
import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
  } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button'
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation'
import axios from 'axios'

const AddModal = () => {
    const router = useRouter()
    const {type,isOpen,onClose} = useModal()
    const { register, handleSubmit,reset, formState: { isSubmitting,errors } } = useForm();
    const isModalOpen = isOpen && type==="addModal"
    
    const handleCLose = ()=>{
        reset()
        onClose()
    }

    const onSubmit = async (data)=>{
        console.log(data)
        const res = await axios.post(`http://localhost:5000/student/`,{nom:data.name,moyenne:data.moyenne})
        console.log(res)
        router.refresh()
        reset()
      }
    
  return (
    <Dialog open={isModalOpen} onOpenChange={handleCLose}>
        <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
                <DialogTitle>Ajout</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label htmlFor="name">Nom</label>
                    <Input name="name" type="text" 
                    placeholder="Nom..."
                    {...register('name', { required: 'Veiller entrer le nom!'})}/>
                    {errors.name && <span className="error">{errors.name.message}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="moyenne">Moyenne</label>
                    <Input name="moyenne" type="text" 
                    placeholder="moyenne..." 
                    {...register('moyenne', { required: 'Entrer la moyenne!'})}/>
                    {errors.moyenne && <span className="error">{errors.moyenne.message}</span>}
                </div>
            <Button type="submit" className="primary">Enregistrer</Button>
            </form>
        </DialogContent>
    </Dialog>
  )
}

export default AddModal