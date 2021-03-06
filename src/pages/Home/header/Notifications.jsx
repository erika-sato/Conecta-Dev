import SvgIcon from '@material-ui/core/SvgIcon'
import {
    Bell as BellIcon,
    Star as StarIcon,
    MessageCircle as MessageIcon,
    Heart as HeartIcon,
    Users as ConnectionIcon,
} from 'react-feather';
import IconButton from '@material-ui/core/IconButton';
import Popover from '@material-ui/core/Popover';
import { useSelector, useDispatch } from 'react-redux'
import { useRef, useState, useEffect } from 'react'
import { getNotifications } from '../../../actions/NotificationsActions'
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import { makeStyles } from '@material-ui/core/styles';

const iconsMap = {
    reviews: StarIcon,
    new_comment: MessageIcon,
    like: HeartIcon,
    connection: ConnectionIcon,
};

const useStyles = makeStyles((theme) => ({
    icon: {
      background: theme.palette.secondary.main,
      color: theme.palette.secondary.contrastText,
    },
  }));

function Notifications() {
    const account = useSelector((state) => state.account)
    const notifications = useSelector((state) => state.notifications.notifications)
    const isAuthenticated = !!account.user
    const ref = useRef(null)
    const [isOpen, setOpen] = useState(false)
    const dispatch = useDispatch()

    const classes = useStyles();

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    useEffect(() => {
        dispatch(getNotifications())
    }, [dispatch])


    return (
        isAuthenticated && (

            <>
                <IconButton ref={ref} onClick={handleOpen}>
                    <SvgIcon>
                        <BellIcon />
                    </SvgIcon>
                </IconButton>
                <Popover
                    open={isOpen}
                    onClose={handleClose}
                    anchorEl={ref.current}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                >
                    <Box p={2}>
                        <Typography variant="h6" color="textPrimary">
                            Notifica????es
                        </Typography>
                    </Box>

                    <List>
                        {notifications.map((notification) => {
                             const Icon = iconsMap[notification.type]
                             return (
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar className={classes.icon}>
                                        <SvgIcon>
                                        <Icon />
                                        </SvgIcon>
                                    </Avatar>

                                </ListItemAvatar>

                                <ListItemText
                                    primary={notification.title}
                                    primaryTypographyProps={{ variant: 'subtitle2', color: 'textPrimary' }}
                                    secondary={notification.description}
                                />

                            </ListItem>
                             )

                        })}

                    </List>
                </Popover>
            </>
        )
    )
}

export default Notifications