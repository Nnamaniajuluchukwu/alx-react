import PropTypes from 'prop-types';

const NotificationItemshape = PropTypes.shape({
    id: PropTypes.number.isRequired,
    html: PropTypes.shape({
        __html: PropTypes.string
    }),
    type: PropTypes.string.isRequired,
    value: PropTypes.string
});

export default NotificationItemshape;
