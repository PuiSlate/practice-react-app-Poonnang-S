import ProfileCard from "./ProfileCard";

const ProfileContainer = () => {
    const profiles = [
        {name: "Andrew", age: 34, bio: "A software engineer who loves hiking."},
        {name: "Jordan", age: 30, bio: "A designer passionate about photography."},
        {name: "Mandie", age: 27, bio: "A peditrician passionate about traveling."}
    ];
    
    return (
        <div className="profile-container">
            <h1>User Profiles</h1>
            {profiles.map((profile, index)=> (
            <ProfileCard
            key={index}
            name={profile.name}
            age={profile.age}
            bio={profile.bio}
            />
            ))}
        </div>
    );
}

export default ProfileContainer;