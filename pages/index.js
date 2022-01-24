function Titulo(props) {
    console.log(props.children);
    return (
        <h1>Boas vindas de volta!</h1>
    );
}

// Componente react
function HomePage() {
    //JSX
    return (
        <div>
            <Titulo>Boas vindas</Titulo>
            <h2>Discord - Alura Matrix</h2>
            <style jsx>{`
                h1 {
                    color: red;
                }
            `}</style>
        </div>
    )
}

export default HomePage