export default function Button(props){
    return(
        <>
            <button class={props.class}>
                {props.svg}
                <span>{props.text}</span>
            </button>
        </>
    )
}