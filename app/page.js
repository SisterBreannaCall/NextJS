import LikeButton from "./like-button";

function Header({title}) {
    console.log(title);
    return <h1>{title}</h1>;
}

export default function HomePage() {
    const names = ['Banana', 'Apple', 'Orange'];

    return (
        <div>
            <Header title="React" />
            <ul>
                {names.map((name) => (
                    <li key={name}>{name}</li>
                ))}
            </ul>
            <LikeButton />
        </div>
    );
}