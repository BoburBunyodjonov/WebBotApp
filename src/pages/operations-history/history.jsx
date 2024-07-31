import { Avatar, Box, Typography } from "@mui/material";

import React, { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import avatar1 from "../../assets/Frame 69.png";

import { CSSTransition } from 'react-transition-group';

import {useNavigate } from "react-router-dom";

import './history.css'


const History = () => {
  const [modal, setModal] = useState(false);

  const { id } = useParams();
  const [item, setItem] = React.useState(null);

  const navigate = useNavigate();

  const nodeRef = useRef(null);

  const Users = [
    {
      id: 1,
      name: "Анастасия Бойко",
      img: avatar1,
      price: "1320,64 ₽",
      status: "успешно",
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
      status: "успешно",
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
    const selectedItem = Users.find((user) => user.id === parseInt(id));
    setItem(selectedItem);
  }, [id]);

  if (!item) {
    return <Typography>Item not found.</Typography>;
  }

  const openModal = () => setModal(true);
  const closeModal = () => setModal(false);
  const done = () => {
    alert('Вернулся');
    setModal(false);
    navigate(`/finance`);
  };


  return (
    <>
      <div className="h-screen">
        <Box display="flex" className="py-2 pt-5">
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
          <Typography className=" flex items-center px-2" variant="span">
            Получено от
            <Typography className="px-1">{item.name}</Typography>
          </Typography>
        </Box>
        <Box className="py-2 space-y-2">
          <Typography variant="h4" className="text-[#34C75C]">
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
              <span className="text-[#8E8E93]">{item.status}</span>
            </li>
            <li className="py-3 border-b flex justify-between items-center">
              <span className="font-medium">Telegram ID:</span>
              <span className="text-[#8E8E93]">{item.telegram_id}</span>
            </li>
            <li className="py-3 border-b flex justify-between items-center">
              <span className="font-medium">Username:</span>
              <span className="text-[#8E8E93]">{item.username}</span>
            </li>
            <li className="py-3 border-b flex justify-between items-center">
              <span className="font-medium">Order ID::</span>
              <span className="text-[#8E8E93]">{item.order_id}</span>
            </li>
            <li className="py-3 border-b flex justify-between items-center">
              <span className="font-medium">Тариф:</span>
              <span className="text-[#8E8E93]">{item.rate}</span>
            </li>
            <li className="py-3 border-b flex justify-between items-center">
              <span className="font-medium">ID тарифа:</span>
              <span className="text-[#8E8E93]">{item.rateId}</span>
            </li>
          </ul>
          <button
            onClick={openModal}
            className="px-5 py-3 bg-white w-full text-[#FD2C55]"
          >
            Сделать возврат
          </button>
        </Box>
      </div>
   <CSSTransition
            nodeRef={nodeRef}
            in={modal}
            timeout={300}
            classNames="modal"
            unmountOnExit
            onEnter={() => setModal(true)}
            onExited={() => setModal(false)}
          > 
          <div ref={nodeRef} className="modal-container w-full text-center absolute left-0 bottom-0 py-5 border border-grey-500 bg-zinc-300 rounded-t-2xl ">
            <Typography variant="h5">
              Пользователь получит частичный возврат с учетом комиссии сервиса
            </Typography>
            <Typography color={"#636366"} variant="span">
              Вы уверены, что хотите сделать возврат?
            </Typography>
            <div className="container mx-auto block space-y-3 md:flex md:space-y-0 gap-3 p-3 ">
              <button onClick={done} className="w-full px-4 py-2 bg-white rounded-lg text-red-500">
                Сделать возврат
              </button>
              <button onClick={closeModal} className="w-full px-4 py-2 bg-white rounded-lg text-blue-500">
                Отмена
              </button>
            </div>
      </div> 
      </CSSTransition>
    </>
  );
};

export default History;
