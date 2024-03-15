"use client"

import React from 'react'
import { Button } from '@/components/ui/button'
import { useModal } from '@/hooks/use-modal-hook'
import { SquarePen } from 'lucide-react'

const EditButton = ({data}) => {
    const {onOpen} = useModal()
    
  return (
      <Button onClick={()=>{onOpen("editModal",data)}} className="bg-green-500">
         <SquarePen/>
      </Button>
  )
}

export default EditButton