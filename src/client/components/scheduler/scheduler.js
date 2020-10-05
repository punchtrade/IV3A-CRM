import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import { ViewState, EditingState, IntegratedEditing, GroupingState, IntegratedGrouping } from '@devexpress/dx-react-scheduler';
import {
    Scheduler,
    Appointments,
    AppointmentForm,
    AppointmentTooltip,
    WeekView,
    DayView,
    MonthView,
    Resources,
    EditRecurrenceMenu,
    AllDayPanel,
    ConfirmationDialog,
    DragDropProvider,
    Toolbar,
    DateNavigator,
    TodayButton,
    ViewSwitcher,
    GroupingPanel,
} from '@devexpress/dx-react-scheduler-material-ui';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import MoreIcon from '@material-ui/icons/MoreVert';
import Grid from '@material-ui/core/Grid';
import Room from '@material-ui/icons/Room';
import classNames from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import { appointments, recurrenceAppointments, resourcesData } from '../scheduler/appointments';
// import { owners } from '../scheduler/tasks';
import {
    teal, indigo,green, deepOrange, lightBlue,pink, purple, amber
} from '@material-ui/core/colors';

const style = ({ palette }) => ({
    icon: {
        color: palette.action.active,
    },
    textCenter: {
        textAlign: 'center',
    },
    firstRoom: {
        background: 'url(https://js.devexpress.com/Demos/DXHotels/Content/Pictures/Lobby-4.jpg)',
    },
    secondRoom: {
        background: 'url(https://js.devexpress.com/Demos/DXHotels/Content/Pictures/MeetingRoom-4.jpg)',
    },
    thirdRoom: {
        background: 'url(https://js.devexpress.com/Demos/DXHotels/Content/Pictures/MeetingRoom-0.jpg)',
    },
    header: {
        height: '260px',
        backgroundSize: 'cover',
    },
    commandButton: {
        backgroundColor: 'rgba(255,255,255,0.65)',
    },
});
const styles = theme => ({
    container: {
        display: 'flex',
        marginBottom: theme.spacing(2),
        justifyContent: 'flex-end',
    },
    text: {
        ...theme.typography.h6,
        marginRight: theme.spacing(2),
    },
});

const owners = [{
    text: 'Hervé',
    id: 1,
    color: indigo,
}, {
    text: 'Mariano',
    id: 2,
    color: teal,
},
{
    text: 'Fátima',
    id: 3,
    color: green,
},

];

const locations = [
    { text: 'IV3A', id: 1 },
    { text: 'PT', id: 2 },
];

const getClassByLocation = (classes, location) => {
    if (location === 'IV3A') return classes.firstRoom;
    if (location === 'PT') return classes.secondRoom;
    return classes.thirdRoom;
};

const Header = withStyles(style, { name: 'Header' })(({
    children, appointmentData, classes, ...restProps
}) => (
        <AppointmentTooltip.Header
            {...restProps}
            className={classNames(getClassByLocation(classes, appointmentData.location), classes.header)}
            appointmentData={appointmentData}
        >
            <IconButton
                /* eslint-disable-next-line no-alert */
                onClick={() => alert(JSON.stringify(appointmentData))}
                className={classes.commandButton}
            >
                <MoreIcon />
            </IconButton>
        </AppointmentTooltip.Header>
    ));

const Content = withStyles(styles, { name: 'Content' })(({
    children, appointmentData, classes, ...restProps
}) => (
        <AppointmentTooltip.Content {...restProps} appointmentData={appointmentData}>
            <Grid container alignItems="center">
                <Grid item xs={2} className={classes.textCenter}>
                    <Room className={classes.icon} />
                </Grid>
                <Grid item xs={10}>
                    <span>{appointmentData.location}</span>
                </Grid>
            </Grid>
        </AppointmentTooltip.Content>
    ));

const CommandButton = withStyles(style, { name: 'CommandButton' })(({
    classes, ...restProps
}) => (
        <AppointmentTooltip.CommandButton {...restProps} className={classes.commandButton} />
    ));

const ResourceSwitcher = withStyles(styles,{ name: 'ResourceSwitcher' })(
    ({
        mainResourceName, onChange, classes, resources,
    }) => (
            <div className={classes.container}>
                <div className={classes.text}>
                    Main resource name:
        </div>
                <Select
                    value={mainResourceName}
                    onChange={e => onChange(e.target.value)}
                >
                    {resources.map(resource => (
                        <MenuItem key={resource.fieldName} value={resource.fieldName}>
                            {resource.title}
                        </MenuItem>
                    ))}
                </Select>
            </div>
        ),
);


const dragDisableIds = new Set([3, 8, 10, 12]);

const allowDrag = ({ id }) => !dragDisableIds.has(id);
const appointmentComponent = (props) => {
    if (allowDrag(props.data)) {
        return <Appointments.Appointment {...props} />;
    } return <Appointments.Appointment {...props} style={{ ...props.style, cursor: 'not-allowed' }} />;
};

export default class Demo extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            data: appointments, recurrenceAppointments, resourcesData, owners,
            currentDate: '2020-10-05',
            resources: [
                {
                    fieldName: 'roomId',
                    title: 'Room',
                    instances: resourcesData,
                },
                {
                    fieldName: 'members',
                    title: 'Members',
                    instances: owners,
                    allowMultiple: true,
                },
            ],
            grouping: [{
                resourceName: 'roomId',
            }, {
                resourceName: 'members',
            }],

            addedAppointment: {},
            appointmentChanges: {},
            editingAppointment: undefined,
        };

        this.commitChanges = this.commitChanges.bind(this);
        this.onCommitChanges = this.commitChanges.bind(this);
        this.changeMainResource = this.changeMainResource.bind(this);
        this.changeAddedAppointment = this.changeAddedAppointment.bind(this);
        this.changeAppointmentChanges = this.changeAppointmentChanges.bind(this);
        this.changeEditingAppointment = this.changeEditingAppointment.bind(this);
        this.currentDateChange = (currentDate) => { this.setState({ currentDate }); };
    }

    changeMainResource(mainResourceName) {
        this.setState({ mainResourceName });
    }

    changeAddedAppointment(addedAppointment) {
        this.setState({ addedAppointment });
    }

    changeAppointmentChanges(appointmentChanges) {
        this.setState({ appointmentChanges });
    }

    changeEditingAppointment(editingAppointment) {
        this.setState({ editingAppointment });
    }

    commitChanges({ added, changed, deleted }) {
        this.setState((state) => {
            let { data } = state;
            if (added) {
                const startingAddedId = data.length > 0 ? data[data.length - 1].id + 1 : 0;
                data = [...data, { id: startingAddedId, ...added }];
            }
            if (changed) {
                data = data.map(appointment => (
                    changed[appointment.id] ? { ...appointment, ...changed[appointment.id] } : appointment));
            }
            if (deleted !== undefined) {
                data = data.filter(appointment => appointment.id !== deleted);
            }
            return { data };
        });
    }

    render() {
        const {
            currentDate, data, addedAppointment, appointmentChanges, editingAppointment, resources, mainResourceName, grouping, onChange, classes,
        } = this.state;

        return (
            <React.Fragment>
                <ResourceSwitcher
                    resources={resources}
                    mainResourceName={mainResourceName}
                    onChange={this.changeMainResource}
                />
                <Paper>
                    <Scheduler
                        data={data}
                        height={800}
                    >
                        <ViewState
                            currentDate={currentDate}
                            onCurrentDateChange={this.currentDateChange}
                            defaultCurrentDate={currentDate}
                        />
                        <EditingState
                            onCommitChanges={this.commitChanges}

                            addedAppointment={addedAppointment}
                            onAddedAppointmentChange={this.changeAddedAppointment}

                            appointmentChanges={appointmentChanges}
                            onAppointmentChangesChange={this.changeAppointmentChanges}

                            editingAppointment={editingAppointment}
                            onEditingAppointmentChange={this.changeEditingAppointment}
                        />
                        <GroupingState
                            grouping={grouping}
                        />
                        <IntegratedEditing />
                        <DayView
                            startDayHour={9}
                            endDayHour={20}
                            intervalCount={2}
                        />
                        <WeekView
                            startDayHour={9}
                            endDayHour={20}
                        />
                        <MonthView />
                        <AllDayPanel />
                        <EditRecurrenceMenu />
                        <ConfirmationDialog
                        />

                        <Toolbar />
                        <DateNavigator />
                        <TodayButton />
                        <ViewSwitcher />
                        <Appointments
                            appointmentComponent={appointmentComponent}
                        />
                        <AppointmentTooltip
                            headerComponent={Header}
                            contentComponent={Content}
                            commandButtonComponent={CommandButton}
                            showOpenButton
                            showDeleteButton
                        />
                        <DragDropProvider
                            allowDrag={allowDrag}
                        />
                        <AppointmentForm />
                       
                        <Resources
                            data={resources}
                            mainResourceName={mainResourceName}
                        />
                        <IntegratedGrouping />
                        <IntegratedEditing />
                        <GroupingPanel />
                    </Scheduler>
                </Paper>
            </React.Fragment>
        );
    }
}
