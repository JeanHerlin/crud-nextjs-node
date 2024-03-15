"use client"

import { useModal } from '@/hooks/use-modal-hook'
import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogHeader,
  } from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import axios from 'axios'

const DeleteConfirm = () => {
    const router = useRouter()
    const {type,isOpen,onClose,data} = useModal()
    const isModalOpen = isOpen && type==="confirmDelete"
    
    const handleCLose = ()=>{
        onClose()
    }

    const onDelete = async ()=>{
        const res = await axios.delete(`http://localhost:5000/student/${data?.numEt}`)
        console.log(res)
        router.refresh()
        onClose()
      }
    
  return (
    <Dialog open={isModalOpen} onOpenChange={handleCLose}>
        <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <p className='text-center'>Confirmer la suppresion de <strong>{data?.nom}</strong></p>
            </DialogHeader>
            <div className=' flex justify-center gap-4'>
            <Button className="bg-rose-500" onClick={onDelete}>Confirmer</Button>
            <Button onClick={handleCLose} className="bg-indigo-500">Annuler</Button>
            </div>
        </DialogContent>
    </Dialog>
  )
}

export default DeleteConfirm