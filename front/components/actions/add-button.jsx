"use client"

import React from 'react'
import { Button } from '@/components/ui/button'
import { useModal } from '@/hooks/use-modal-hook'

const AddButton = () => {
    const {onOpen} = useModal()
  return (
    <Button onClick={()=>{onOpen("addModal");console.log("clicked")}} className="bg-blue-400">
        Ajouter 
    </Button>
  )
}

export default AddButton