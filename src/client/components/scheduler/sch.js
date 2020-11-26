import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles, fade } from '@material-ui/core/styles';
import { ViewState, EditingState, IntegratedEditing, GroupingState, IntegratedGrouping, } from '@devexpress/dx-react-scheduler';
import {
    WeekView,
    Toolbar,
    ViewSwitcher,
    MonthView,
    Scheduler,
    DateNavigator,
    TodayButton,
    DayView,
    Resources,
    Appointments,
    AppointmentTooltip,
    AppointmentForm,
    ConfirmationDialog,
    DragDropProvider,
    EditRecurrenceMenu,
    AllDayPanel,
    GroupingPanel,
} from '@devexpress/dx-react-scheduler-material-ui';
import LowPriority from '@material-ui/icons/LowPriority';
import PriorityHigh from '@material-ui/icons/PriorityHigh';

import { appointments, resourcesData, appointmentsMonth } from '../scheduler/appointments';
import recurrenceAppointments from '../scheduler/recurrence-appointments';
import { owners } from '../scheduler/tasks';
import {
    teal, indigo, green, orange, red
} from '@material-ui/core/colors';
import { connect } from 'react-redux';
import moment from 'moment';


const styles = theme => ({
    button: {
        color: theme.palette.background.default,
        padding: 0,
    },
    container: {
        display: 'flex',
        marginBottom: theme.spacing(2),
        justifyContent: 'flex-end',
    },
    text: {
        paddingTop: theme.spacing(1),
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
    },

});
const ResourceSwitcher = withStyles(styles, { name: 'ResourceSwitcher' })(
    ({
        mainResourceName, onChange, classes, resources,
    }) => (
            <div className={classes.container}>
                <div className={classes.text}>
                    Nom de la ressource principale:
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
const priorityData = [
    { text: 'Low Priority', id: 1, color: green },
    { text: 'Medium Priority', id: 2, color: indigo },
    { text: 'High Priority', id: 3, color: orange },

];

const findColorByGroupId = id => (priorityData.find(item => item.id === id)).color;
const getIconById = id => (id === 1 ? LowPriority : PriorityHigh);
const messages = {
    moreInformationLabel: '',
};
const TextEditor = (props) => {
    // eslint-disable-next-line react/destructuring-assignment
    if (props.type === 'multilineTextEditor') {
        return null;
    } return <AppointmentForm.TextEditor {...props} />;
};
const BasicLayout = ({ onFieldChange, appointmentData, ...restProps }) => {
    const onCustomFieldChange = (nextValue) => {
        onFieldChange({ customField: nextValue });
    };
    return (
        <AppointmentForm.BasicLayout
            appointmentData={appointmentData}
            fullSize
            onFieldChange={onFieldChange}
            {...restProps}
        >
            <AppointmentForm.Label
                text="Custom Field"
                type="title"
            />
            <AppointmentForm.TextEditor
                value={appointmentData.customField}
                onValueChange={onCustomFieldChange}
                placeholder="Custom field"
            />
        </AppointmentForm.BasicLayout>
    );
};
const dragDisableIds = new Set([3, 8, 10, 12]);

const allowDrag = ({ id }) => !dragDisableIds.has(id);
const appointmentComponent = (props) => {
    if (allowDrag(props.data)) {
        return <Appointments.Appointment {...props} />;
    } return <Appointments.Appointment {...props} style={{ ...props.style, cursor: 'not-allowed' }} />;
};

const locations = [
    { text: 'PT', id: 1 , color: teal},
    { text: 'IV3A', id: 2 , color: red},
];

const SHIFT_KEY = 16;

const date = moment().toDate();

class Calendar extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            data: appointments, recurrenceAppointments, appointmentsMonth, resourcesData,
            currentViewName: 'work-week',
            currentDate: date,
            mainResourceName: 'members',
            isShiftPressed: false,
            resources: [{
                fieldName: 'members',
                title: 'Membres',
                instances: owners,
                allowMultiple: true,
            }, {
                fieldName: 'roomId',
                title: 'Emplacement',
                instances: locations,
            }],
            grouping: [{
                resourceName: 'roomId',
            }, {
                resourceName: 'members',
            }],
        };
        this.changeMainResource = this.changeMainResource.bind(this);


        this.currentViewNameChange = (currentViewName) => {
            this.setState({ currentViewName });
            this.commitChanges = this.commitChanges.bind(this);
            this.onKeyDown = this.onKeyDown.bind(this);
            this.onKeyUp = this.onKeyUp.bind(this);

        };

    }
    changeMainResource(mainResourceName) {
        this.setState({ mainResourceName });

    }
    componentDidMount() {
        window.addEventListener('keydown', this.onKeyDown);
        window.addEventListener('keyup', this.onKeyUp);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown');
        window.removeEventListener('keyup');
    }

    onKeyDown(event) {
        if (event.keyCode === SHIFT_KEY) {
            this.setState({ isShiftPressed: true });
        }
    }

    onKeyUp(event) {
        if (event.keyCode === SHIFT_KEY) {
            this.setState({ isShiftPressed: false });
        }
    }
    commitChanges({ added, changed, deleted }) {
        this.setState((state) => {
            let { data } = state;
            const { isShiftPressed } = this.state;
            if (added) {
                const startingAddedId = data.length > 0 ? data[data.length - 1].id + 1 : 0;
                data = [...data, { id: startingAddedId, ...added }];
            }
            if (changed) {
                if (isShiftPressed) {
                    const changedAppointment = data.find(appointment => changed[appointment.id]);
                    const startingAddedId = data.length > 0 ? data[data.length - 1].id + 1 : 0;
                    data = [
                        ...data,
                        { ...changedAppointment, id: startingAddedId, ...changed[changedAppointment.id] },
                    ];
                } else {
                    data = data.map(appointment => (
                        changed[appointment.id]
                            ? { ...appointment, ...changed[appointment.id] }
                            : appointment));
                }
            }
            if (deleted !== undefined) {
                data = data.filter(appointment => appointment.id !== deleted);
            }
            return { data };
        });
    }

    render() {
        const { data, currentViewName, currentDate, mainResourceName, resources } = this.state;

        return (
            <React.Fragment>
                <Paper>
                    <ResourceSwitcher
                        resources={resources}
                        mainResourceName={mainResourceName}
                        onChange={this.changeMainResource}
                    />
                    <Scheduler
                        data={data}
                        height={660}
                    >
                        <ViewState
                            currentViewName={currentViewName}
                            currentDate={currentDate}
                            onCurrentViewNameChange={this.currentViewNameChange}
                        />
                        <EditingState
                            onCommitChanges={this.commitChanges}
                        />
                        <IntegratedEditing />
                        <DayView
                            startDayHour={9}
                            endDayHour={19}
                            intervalCount={2}
                        />
                        <EditRecurrenceMenu />
                        <WeekView
                            name="work-week"
                            displayName="Work Week"
                            excludedDays={[0, 6]}
                            startDayHour={9}
                            endDayHour={19}
                        />
                        <MonthView />
                        <DayView
                            startDayHour={8}
                            endDayHour={13}
                        />
                        <ConfirmationDialog
                        />
                        <Toolbar />
                        <DateNavigator />
                        <TodayButton />
                        <ViewSwitcher />
                        <Appointments
                            basicLayoutComponent={BasicLayout}
                            textEditorComponent={TextEditor}
                            messages={messages}
                            appointmentComponent={appointmentComponent}
                        />
                        <AllDayPanel />
                        <DragDropProvider
                            allowDrag={allowDrag}
                        />
                        <AppointmentTooltip
                            showCloseButton
                            showOpenButton
                            showDeleteButton />
                        <Resources
                            data={resources}
                            mainResourceName="members"
                        />
                        <AppointmentForm
                        />
                        <DragDropProvider />
                    </Scheduler>
                </Paper>
            </React.Fragment>
        );
    }
}

function mapStateToProps(state) {
    console.log('state', state);
    return {
        reminders: state,
    }
}

export default connect(mapStateToProps)(Calendar);

