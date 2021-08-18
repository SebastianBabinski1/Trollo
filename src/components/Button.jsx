export default function Button(props){
    return(
        <>
            <button class={props.buttonClass}>
                {props.svg}
                <span class={props.spanClass}>{props.text}</span>
            </button>
        </>
    )
}