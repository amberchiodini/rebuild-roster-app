function Player(props) {
    const hobbyList = props.hobbies.map(hobby => {
        return <li>{hobby}</li>
    })
    const hobbies = props.hobbies.length < 1 ? "No hobbies listed."
    : hobbyList
    return (
        <div>
            <h3>Player Name: {props.firstName}</h3>
            <p>Country: {props.country}</p>
            <p>{hobbies}</p>
        </div>
    )
}

export default Player;