import "./Profile.css"
import { Col } from "react-bootstrap"
import type { DatePickerProps } from 'antd';
import { DatePicker } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { Button, Dropdown, Space, message, MenuProps } from "antd";
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import {Input }from "antd";
import { MenuItemType } from 'antd/es/menu/hooks/useItems';
import { render } from "react-dom";

dayjs.extend(customParseFormat);
let profile = {
  name: "MR.USER",
  email: "user@gmail.com",
  dateOfBirth: "01/01/2018",
  sex: "Male",
  addressCompany: "15,Duy Tan,Dich Vong Hau, Cau Giay, Ha Noi",
  addressHome: "15,Duy Tan,Dich Vong Hau, Cau Giay, Ha Noi",
  image: "icon.svg"
}

const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
  message.info('Click on left button.');
  console.log('click left button', e);
};

interface Items {
  label: string;
  key: string;
  icon: React.ReactNode;
};

const items: MenuItemType[] = [
  {
    label: 'Male',
    key: 1,
    icon: <UserOutlined />,
  },
  {
    label: 'Female',
    key: 2,
    icon: <UserOutlined />,
  }
];

const handleMenuClick: MenuProps['onClick'] = (e) => {
  // profile.sex = items.at(Number(e.key)-1)?.label
  if(items.at(Number(e.key)-1)?.label){
    //profile.sex = items.at(Number(e.key)-1).label;
    // render();
  }
  let key = e.key;
  // key = Number(key);
  console.log(items.at(Number(e.key)-1)?.label);
};

const menuProps = {
  items,
  onClick: handleMenuClick,
};

const dateFormat = 'DD/MM/YYYY';

const MyProfile: React.FC = () => {

  return (
    <Col className="profile">
                      <div style={{position: 'sticky',backgroundColor: '#fff', zIndex: '1', top: '100px', left: '200px', borderBottom: '1px, #fff'}}>
                <h4 style={{padding: '10px'}}>My Profile</h4>
                </div>
      <div className="mainInfo">
        <img
          src={profile.image}
          width="150"
          height="150"
          className="profileIcon"
          alt="Brand logo"
        />
        <div>
          <h2 className="name">{profile.name}</h2>
          <br />
          <p className="email"> Email: {profile.email}</p>
        </div>
      </div>
      <div className="additionInfo">
        <div className="date">Date of Birth:</div>     
        <DatePicker defaultValue={dayjs('01/01/2018', dateFormat)} format={dateFormat} />

        <br />
        <div className="sex">Sex:</div>
        <Dropdown menu={menuProps} >
          <Button>
            <Space>
              {profile.sex}
              <DownOutlined />
            </Space>
          </Button>
        </Dropdown>
        <br/>
        <div className="address">Address Company:</div> <Input className="text" value={profile.addressCompany}/>
        <br/>
        <div className="address">Address Home:</div> <Input className="text" value={profile.addressHome}/>
      </div>
    </Col>
  )
}
export default MyProfile;