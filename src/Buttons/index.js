import "./style.css";

const Buttons = ({ tasks, hideDone }) => (
    <div className="section__buttons">
        {
            tasks.length > 0 && (
                <>
                    <button className="section__header--button">{hideDone ? "Pokaż" : "Ukryj"} ukończone</button>
                    <button className="section__header--button"
                        disabled={tasks.every(({ done }) => done)}
                    >Ukończ wszytskie</button>
                </>
            )
        }
    </div>
)
export default Buttons;