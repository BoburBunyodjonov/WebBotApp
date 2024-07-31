import { Avatar, Box, Typography } from "@mui/material";

import React from 'react';
import { useParams } from 'react-router-dom';
import avatar1 from '../../assets/Frame 69.png';

const Return = () => {


    const { id } = useParams();
    const [item, setItem] = React.useState(null);
  
    const Users = [
        {
          id: 1,
          name: "Анастасия Бойко",
          img: avatar1,
          price: "1320,64 ₽",
          status: "successfully",
          return_type: "partial",
          telegram_id: "3123124123",
          username: "31231231231",
          order_id: 31231231231,
          rate: "Чеклист альткоинов",
          rateId: 31231231231,
          date: "6 марта в 22:40",
          type: "Получено",
        },
        {
          id: 2,
          name: "Андрей Сергеев",
          price: "1320,64 ₽",
          img: avatar1,
          status: "successfully",
          return_type: "partial",
          telegram_id: "3143121123",
          username: "311231231231",
          order_id: 32231234231,
          rate: "Чеклист альткоинов",
          rateId: 34230231221,
          date: "6 марта в 22:40",
          type: "Возврат",
        },
      ];
  
    React.useEffect(() => {
      const selectedItem = Users.find(user => user.id === parseInt(id));
      setItem(selectedItem);
    }, [id]);
  
    if (!item) {
      return <Typography>Item not found.</Typography>;
    }



  return (
    <div className="h-screen">

        <Box display="flex" className="py-2 pt-5" >
            <Avatar  alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            <Typography className=" flex items-center px-2"  variant="span">Возврат 
                <Typography className="px-1">{item.name}</Typography>
            </Typography>
        </Box>
        <Box className="py-2 space-y-2">
            <Typography variant="h4" className="text-black">
                {item.price}
            </Typography>
            <Typography variant="span" className="text-[#8E8E93]">
                {item.date}
            </Typography>
        </Box>
        <Box className="py-2 space-y-4">
            <ul className="bg-white rounded-lg px-3">
                <li className="py-3 border-b flex justify-between items-center">
                    <span className="font-medium">Статус операции:</span>
                    <span className="text-[#8E8E93]">успешно</span>
                </li>
                <li className="py-3 border-b flex justify-between items-center">
                    <span className="font-medium">Тип возврата:</span>
                    <span className="text-[#8E8E93]">частичный</span>
                </li>
                <li className="py-3 border-b flex justify-between items-center">
                    <span className="font-medium">Telegram ID:</span>
                    <span className="text-[#8E8E93]">3123124123</span>
                </li>
                <li className="py-3 border-b flex justify-between items-center">
                    <span className="font-medium">Username:</span>
                    <span className="text-[#8E8E93]">31231231231</span>
                </li>
                <li className="py-3 border-b flex justify-between items-center">
                    <span className="font-medium">Order ID::</span>
                    <span className="text-[#8E8E93]">31231231231</span>
                </li>
                <li className="py-3 border-b flex justify-between items-center">
                    <span className="font-medium">Тариф:</span>
                    <span className="text-[#8E8E93]">Чеклист альткоинов</span>
                </li>
                <li className="py-3 border-b flex justify-between items-center">
                    <span className="font-medium">ID тарифа:</span>
                    <span className="text-[#8E8E93]">31231231231</span>
                </li>
            </ul>
        </Box>


    </div>
  )
}

export default Return