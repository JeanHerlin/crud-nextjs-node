"use client"

import React, { useEffect, useState } from 'react'
import EditModal from '@/components/modals/edit-modal'
import AddModal from '@/components/modals/add-modal'
import DeleteConfirm from '@/components/modals/delete-confirm'

const ModalsProvider = () => {
    const [isMounted,setIsMounted] = useState(false)
    useEffect(()=>{
        setIsMounted(true)
    },[])

    if(!isMounted) return null
    
    return (
        <>
            <EditModal/>
            <AddModal/>
            <DeleteConfirm/>
        </>
    )
}

export default ModalsProvider