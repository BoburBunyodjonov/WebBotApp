import { Avatar, Box, Typography } from "@mui/material"

const Conclusion = () => {
  return (
    <div className="h-screen">

        <Box display="flex" className="py-2 pt-5" >
            <Avatar  alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            <Typography className=" flex items-center px-2"  variant="span">Вывод 
            </Typography>
        </Box>
        <Box className="py-2 space-y-2">
            <Typography variant="h4" className="text-black">
                +1320,64 ₽
            </Typography>
            <Typography variant="span" className="text-[#8E8E93]">
                6 марта в 22:40
            </Typography>
        </Box>
        <Box className="py-2 space-y-4">
            <ul className="bg-white rounded-lg px-3">
                <li className="py-3 border-b flex justify-between items-center">
                    <span className="font-medium">Статус операции:</span>
                    <span className="text-[#8E8E93]">успешно</span>
                </li>
                <li className="py-3 border-b flex justify-between items-center">
                    <span className="font-medium">Order ID:</span>
                    <span className="text-[#8E8E93]">31231231231</span>
                </li>
            </ul>
        </Box>


    </div>
  )
}

export default Conclusion