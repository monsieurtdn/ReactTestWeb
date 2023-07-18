import "./Profile.css"

let profile = {
    name: "MR.USER",
    email: "user@gmail.com",
    dateOfBirth: "01/01/2018",
    sex: 1,
    addressCompany: "15,Duy Tan,Dich Vong Hau, Cau Giay, Ha Noi",
    addressHome: "15,Duy Tan,Dich Vong Hau, Cau Giay, Ha Noi",
    image: "icon.jpg"
}

const MyProfile: React.FC = () => {
    return (
        <>
            <h4>My Profile</h4>
            <div>
                <img
                    src={profile.image}
                    width="100"
                    height="100"
                    className="icon"
                    alt="Brand logo"
                />
                <h4 className="name">{profile.name}</h4>
                <p> Email: {profile.email}</p>
            </div>
            <p>Date of Birth:</p>
            <p>Sex:</p>
            <p>Addess Company:</p>
            <p>Address Home:</p>
        </>
    )
}
export default MyProfile;