import { cva } from '../../styled-system/css'


const link = cva({
    base: {
        w: 'fit-content',
        p: '0.5em 1em',
        display:'flex',
        justifyContent: 'stretch',
        gap: '0.5rem',
        _hover: {
            borderBottom: '2px solid black'
        },
    },
    variants: {
        color: {
            primary: {
                color: 'primary_orange'
            },
            secondary: {
                color: 'primary_blue'
            },
            grey: {
                color: 'grey'
            },
            white: {
                color: 'white'
            },
        }
    },
    defaultVariants: {color: 'primary'}
})


function Link (){
    return (
            <a className={link()}>
                <p>
                    II
                </p>
                <p>Link</p>
            </a>
    )
}

export default Link;