import PropTypes from 'prop-types'

function Item({ marca, ano_lancamento }){
    return (
        <>
            <li>
                {marca} - {ano_lancamento}
            </li>
        </>
    )
}

Item.prototype = {
    marca: PropTypes.string.isRequired, 
    ano_lancamento: PropTypes.number,
}

Item.defaultProps = {
    marca: "Faltou a marca",
    ano_lancamento: 2024,
}

export default Item 