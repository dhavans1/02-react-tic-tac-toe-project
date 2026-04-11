export default function GameContainer({children, ...props}) {
    return (
        <>
            <div { ...props }>
                { children }
            </div>
        </>
    );
}