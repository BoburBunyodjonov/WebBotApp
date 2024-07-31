import {
  Avatar,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";

// Icons
import SearchIcon from "@mui/icons-material/Search";

import avatar1 from "../../assets/Frame 69.png";

const Operations = () => {
  const navigate = useNavigate();
    
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

  const handleListItemClick = (id) => {
    const clickedItem = Users.find(item => item.id === id);
    if (clickedItem) {
      if (clickedItem.type === "Получено") {
        navigate(`/history/${id}`);
      } else {
        navigate(`/return/${id}`);
        console.log('Error: Item type is not "Получено"');
      }
    } else {
      console.log('Error: Item not found');
    }
    console.log(`Selected item ID: ${id}`);
  };
  

  return (
    <>
      <Box bgcolor={"white"} className="py-4 rounded-t-xl space-y-3">
        <Typography variant="h6" className="px-4">
          Операции за <NavLink to="/calendar" className="text-[#007AFF]">март</NavLink>
        </Typography>
        <form
          action=""
          className="text-center rounded-xl px-3  w-11/12 md:w-[50%] mx-auto flex items-center bg-[#7676801F]"
        >
          <SearchIcon className="" />
          <input
            placeholder="Поиск"
            className="w-full h-full float-end outline-none px-3 py-4  bg-[#c5c5c81f]"
            type="text"
            name=""
            id=""
          />
        </form>
        <Box>
          <List
            dense
            md={{ width: "100%",  bgcolor: "background.paper" }}
          >
            <ListItem
              className="py-2"
              onClick={() => navigate(`/conclusion`)}
              secondaryAction={
                <>
                  <Typography variant="span">1320,64 ₽</Typography>
                  <br />
                  <Typography color={"#8E8E93"} variant="span">
                    Отправлено
                  </Typography>
                </>
              }
              disablePadding
            >
              <ListItemButton>
                <ListItemAvatar>
                  <Avatar />
                </ListItemAvatar>
                <Box>
                  <ListItemText primary="Вывод" />
                  <Typography color={"#8E8E93"} variant="span">
                    6 марта в 22:40
                  </Typography>
                </Box>
              </ListItemButton>
            </ListItem>
            {Users.map((item) => {
              const labelId = `checkbox-list-secondary-label-${item}`;
              return (
                console.log(item.index),
                (
                  <ListItem
                    className="py-2"
                    onClick={() => handleListItemClick(item.id)}
                    key={item.id}
                    secondaryAction={
                      <>
                        <Typography className={`${item.type === "Получено" ?  "text-green-500" : "text-black"}`}  variant="span">{item.price}</Typography>
                        <br />
                        <Typography color={"#8E8E93"} variant="span">
                          {item.type}
                        </Typography>
                      </>
                    }
                    disablePadding
                  >
                    <ListItemButton>
                      <ListItemAvatar>
                        <Avatar alt={`Avatar n°${item + 1}`} src={item.img} />
                      </ListItemAvatar>
                      <Box>
                        <ListItemText id={labelId} primary={item.name} />
                        <Typography color={"#8E8E93"} variant="span">
                          {item.date}
                        </Typography>
                      </Box>
                    </ListItemButton>
                  </ListItem>
                )
              );
            })}
            <ListItem
              className="py-2"
              onClick={() => navigate(`/conversion`)}
              secondaryAction={
                <>
                  <Typography variant="span">1320,64 ₽</Typography>
                  <br />
                  <Typography color={"#8E8E93"} variant="span">
                    Завершено
                  </Typography>
                </>
              }
              disablePadding
            >
              <ListItemButton>
                <ListItemAvatar>
                  <Avatar />
                </ListItemAvatar>
                <Box>
                  <ListItemText primary="Конвертация" />
                  <Typography color={"#8E8E93"} variant="span">
                    6 марта в 22:40
                  </Typography>
                </Box>
              </ListItemButton>
            </ListItem>
            <ListItem
              className="py-2"
              onClick={() => navigate(`/conclusion`)}
              secondaryAction={
                <>
                  <Typography variant="span">1320,64 ₽</Typography>
                  <br />
                  <Typography color={"#8E8E93"} variant="span">
                    Отправлено
                  </Typography>
                </>
              }
              disablePadding
            >
              <ListItemButton>
                <ListItemAvatar>
                  <Avatar />
                </ListItemAvatar>
                <Box>
                  <ListItemText primary="Вывод" />
                  <Typography color={"#8E8E93"} variant="span">
                    6 марта в 22:40
                  </Typography>
                </Box>
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Box>
    </>
  );
};

export default Operations;
