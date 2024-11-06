import { cva, RecipeVariantProps } from '../../styled-system/css'

const button = cva({
    base: {
        w: 'fit-content',
        p: '0.5em 1em',
        rounded: '2em',
        display:'flex',
        justifyContent: 'stretch',
        gap: '0.5rem'
    },
    variants: {
        mode: {
            default: {
                bgColor: 'primary_orange'
            },
            no_fill: {
                border: '1.5px solid primary_orange',
            },
            white_fill: {
                shadow: '0em 0em 0.1em 0.1em grey'
            }
        },
    },
})
export type ButtonVariants = RecipeVariantProps<typeof button> // { size?: 'small' | 'large' }



function Button (){
    return (
            <button className={button()}>
                <p>
                    II
                </p>
                <p>Button</p>
            </button>
    )
}

export default Button;