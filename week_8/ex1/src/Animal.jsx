import PropTypes from "prop-types";
export default function Animal ({url}) {
    return (
        <>
            <img src={url} />
        </>
    )
}
Animal.propTypes = {
    url: PropTypes.string.isRequired
}