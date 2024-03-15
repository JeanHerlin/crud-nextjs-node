"use client"

import React from 'react'
import { Button } from '@/components/ui/button'
import { useModal } from '@/hooks/use-modal-hook'
import { Trash2 } from 'lucide-react'

const DeleteButton = ({data}) => {
    const {onOpen} = useModal()
  return (
    <Button onClick={()=>onOpen("confirmDelete",data)} className="bg-rose-500">
        <Trash2/>
    </Button>
  )
}

export default DeleteButton