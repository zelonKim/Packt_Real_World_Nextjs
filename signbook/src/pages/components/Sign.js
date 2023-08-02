function Sign({ content, nickname, country }) {
    return (
        <div>
            <p> {content} </p>
            <hr />
            <div>
                Written by <b>{nickname}</b>
                {country && <span> from {country} </span>}
            </div>
        </div>
    )
}
export default Sign;

