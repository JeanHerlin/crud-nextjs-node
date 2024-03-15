"use client"

import { useModal } from '@/hooks/use-modal-hook'
import React, { useEffect, useState } from 'react'
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

const EditModal = () => {
    const router = useRouter()
    const {type,isOpen,onClose,data} = useModal()
    const [nom,setNom] = useState('')
    const [moyenne,setMoyenne] = useState('')
    const [errors,setErrors] = useState({nom:"",moyenne:""})
    const isModalOpen = isOpen && type==="editModal"
    const handleCLose = ()=>{
        onClose()
    }

    const handleErrors = ()=>{
        if(nom===""){
            setErrors(prev=>({...errors,nom:"Veiller entrer un nom!"}))
        }
        if(moyenne===""){
            setErrors(prev=>({...errors,nom:"Veiller entrer la moyenne!"}))
        }
    }

    const onSubmit = async ()=>{
        if(nom!="" && moyenne!=""){
            const res = await axios.put(`http://localhost:5000/student/${data?.numEt}`,{nom:nom,moyenne:moyenne})
            router.refresh()
            onClose()
        }
      }
    useEffect(()=>{
        if(data?.nom){
            setNom(data.nom)
            setMoyenne(data.moyenne)
        }
    },[data])

    useEffect(()=>{
        handleErrors()
    },[nom,moyenne])
    
  return (
    <Dialog open={isModalOpen} onOpenChange={handleCLose}>
        <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
                <DialogTitle>Modification</DialogTitle>
            </DialogHeader>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Nom</label>
                    <Input name="name" type="text" 
                    placeholder="Nom..."
                    value = {nom}
                    onChange={(e)=>setNom(e.target.value)}
                    />
                    {nom==="" && <span className="error">{errors.nom}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="moyenne">Moyenne</label>
                    <Input name="moyenne" type="text" 
                    placeholder="moyenne..." 
                    value = {moyenne}
                    onChange={(e)=>setMoyenne(e.target.value)}
                    />
                    {moyenne==="" && <span className="error">{errors.moyenne}</span>}
                </div>
            <Button type="submit" className="primary">Enregistrer</Button>
            </form>
        </DialogContent>
    </Dialog>
  )
}

export default EditModal