import React from 'react'
import { Card,
    CardContent,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'

const HeaderCard = ({cardLabel,cardContent,bg}) => {
  return (
    <Card className={`w-[180px] text-center ${bg} border-transparent`}>
      <CardHeader>
        <CardTitle className="text-zinc-50">{cardLabel}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className='text-zinc-300 text-xl'>{cardContent}</p>
      </CardContent>
    </Card>
  )
}

export default HeaderCard