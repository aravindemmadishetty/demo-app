import { JsxElement } from "typescript"

export default function Name ({name, env}){
    return (
        <div>
            <div className="name">{name}</div>
            <div>env variable: {env}</div>
        </div>
    )
}

export async function getStaticPaths(){
    return ({
        paths: [
            {params: {name: 'Aravind'}},
            {params: {name: 'Arav'}}
        ],
        fallback: false,
    })
}

export async function getStaticProps({params}){
    const env = process.env.NAME
    return ({
        props: {
            name: params.name,
            env,
        },
    })
}