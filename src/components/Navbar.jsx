export default function Navbar({ onHomeClick })
{
    return (
        <div className="nav">
        <span>HOME</span>
        <span onClick={onHomeClick}>GOALS</span>
        <span>SPENDING HISTORY</span>
        </div>
    );
}