import Card from './Card';

const CardList = ({ robots }) => {
    const cardComponents = robots.map((user, i) => {
        return <Card id={robots[i].id} name={robots[i].name} email={robots[i].email}/>
    });
    return (
        <>
            {cardComponents}
        </>
    )
}

export default CardList;