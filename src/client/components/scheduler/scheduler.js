// import * as React from 'react';
// import Paper from '@material-ui/core/Paper';
// import Crm from '../crm/crm';
// import { ViewState, EditingState, IntegratedEditing, GroupingState, IntegratedGrouping } from '@devexpress/dx-react-scheduler';
// import {
//     Scheduler,
//     Appointments,
//     AppointmentForm,
//     AppointmentTooltip,
//     WeekView,
//     DayView,
//     MonthView,
//     Resources,
//     EditRecurrenceMenu,
//     AllDayPanel,
//     ConfirmationDialog,
//     DragDropProvider,
//     Toolbar,
//     DateNavigator,
//     TodayButton,
//     ViewSwitcher,
//     GroupingPanel,
// } from '@devexpress/dx-react-scheduler-material-ui';
// import Select from '@material-ui/core/Select';
// import MenuItem from '@material-ui/core/MenuItem';
// import IconButton from '@material-ui/core/IconButton';
// import MoreIcon from '@material-ui/icons/MoreVert';
// import Grid from '@material-ui/core/Grid';
// import Room from '@material-ui/icons/Room';
// import classNames from 'clsx';
// import { withStyles } from '@material-ui/core/styles';
// import { appointments, recurrenceAppointments, resourcesData } from '../scheduler/appointments';
// import { tasks } from '../scheduler/tasks';
// import {
//     teal, indigo,green, deepOrange, lightBlue,pink, purple, amber
// } from '@material-ui/core/colors';

// const style = ({ palette }) => ({
//     icon: {
//         color: palette.action.active,
//     },
//     textCenter: {
//         textAlign: 'center',
//     },
//     firstRoom: {
//         background: 'url(https://js.devexpress.com/Demos/DXHotels/Content/Pictures/Lobby-4.jpg)',
//     },
//     secondRoom: {
//         background: 'url(https://js.devexpress.com/Demos/DXHotels/Content/Pictures/MeetingRoom-4.jpg)',
//     },
//     thirdRoom: {
//         background: 'url(https://js.devexpress.com/Demos/DXHotels/Content/Pictures/MeetingRoom-0.jpg)',
//     },
//     header: {
//         height: '260px',
//         backgroundSize: 'cover',
//     },
//     commandButton: {
//         backgroundColor: 'rgba(255,255,255,0.65)',
//     },
// });
// const styles = theme => ({
//     container: {
//         display: 'flex',
//         marginBottom: theme.spacing(2),
//         justifyContent: 'flex-end',
//     },
//     text: {
//         ...theme.typography.h6,
//         marginRight: theme.spacing(2),
//     },
// });

// const owners = [{
//     text: 'Hervé',
//     id: 1,
//     color: indigo,
// }, {
//     text: 'Mariano',
//     id: 2,
//     color: teal,
// },
// {
//     text: 'Fátima',
//     id: 3,
//     color: green,
// },

// ];

// const locations = [
//     { text: 'IV3A', id: 1 },
//     { text: 'PT', id: 2 },
// ];

// const getClassByLocation = (classes, location) => {
//     if (location === 'IV3A') return classes.firstRoom;
//     if (location === 'PT') return classes.secondRoom;
//     return classes.thirdRoom;
// };

// const Header = withStyles(style, { name: 'Header' })(({
//     children, appointmentData, classes, ...restProps
// }) => (
//         <AppointmentTooltip.Header
//             {...restProps}
//             className={classNames(getClassByLocation(classes, appointmentData.location), classes.header)}
//             appointmentData={appointmentData}
//         >
//             <IconButton
//                 /* eslint-disable-next-line no-alert */
//                 onClick={() => alert(JSON.stringify(appointmentData))}
//                 className={classes.commandButton}
//             >
//                 <MoreIcon />
//             </IconButton>
//         </AppointmentTooltip.Header>
//     ));

// const Content = withStyles(styles, { name: 'Content' })(({
//     children, appointmentData, classes, ...restProps
// }) => (
//         <AppointmentTooltip.Content {...restProps} appointmentData={appointmentData}>
//             <Grid container alignItems="center">
//                 <Grid item xs={2} className={classes.textCenter}>
//                     <Room className={classes.icon} />
//                 </Grid>
//                 <Grid item xs={10}>
//                     <span>{appointmentData.location}</span>
//                 </Grid>
//             </Grid>
//         </AppointmentTooltip.Content>
//     ));

// const CommandButton = withStyles(style, { name: 'CommandButton' })(({
//     classes, ...restProps
// }) => (
//         <AppointmentTooltip.CommandButton {...restProps} className={classes.commandButton} />
//     ));

// const ResourceSwitcher = withStyles(styles,{ name: 'ResourceSwitcher' })(
//     ({
//         mainResourceName, onChange, classes, resources,
//     }) => (
//             <div className={classes.container}>
//                 <div className={classes.text}>
//                     Main resource name:
//         </div>
//                 <Select
//                     value={mainResourceName}
//                     onChange={e => onChange(e.target.value)}
//                 >
//                     {resources.map(resource => (
//                         <MenuItem key={resource.fieldName} value={resource.fieldName}>
//                             {resource.title}
//                         </MenuItem>
//                     ))}
//                 </Select>
//             </div>
//         ),
// );


// const dragDisableIds = new Set([3, 8, 10, 12]);

// const allowDrag = ({ id }) => !dragDisableIds.has(id);
// const appointmentComponent = (props) => {
//     if (allowDrag(props.data)) {
//         return <Appointments.Appointment {...props} />;
//     } return <Appointments.Appointment {...props} style={{ ...props.style, cursor: 'not-allowed' }} />;
// };

// export default class Demo extends React.PureComponent {
//     constructor(props) {
//         super(props);
//         this.state = {
//             data: appointments, recurrenceAppointments, resourcesData, owners,
//             currentDate: '2020-10-05',
//             resources: [
//                 {
//                     fieldName: 'roomId',
//                     title: 'Room',
//                     instances: resourcesData,
//                 },
//                 {
//                     fieldName: 'members',
//                     title: 'Members',
//                     instances: owners,
//                     allowMultiple: true,
//                 },
//             ],
//             grouping: [{
//                 resourceName: 'roomId',
//             }, {
//                 resourceName: 'members',
//             }],
//             tasks: tasks,

//             addedAppointment: {},
//             appointmentChanges: {},
//             editingAppointment: undefined,
//         };

//         this.commitChanges = this.commitChanges.bind(this);
//         this.onCommitChanges = this.commitChanges.bind(this);
//         this.changeMainResource = this.changeMainResource.bind(this);
//         this.changeAddedAppointment = this.changeAddedAppointment.bind(this);
//         this.changeAppointmentChanges = this.changeAppointmentChanges.bind(this);
//         this.changeEditingAppointment = this.changeEditingAppointment.bind(this);
//         this.currentDateChange = (currentDate) => { this.setState({ currentDate }); };
//     }

//     changeMainResource(mainResourceName) {
//         this.setState({ mainResourceName });
//     }

//     changeAddedAppointment(addedAppointment) {
//         this.setState({ addedAppointment });
//     }

//     changeAppointmentChanges(appointmentChanges) {
//         this.setState({ appointmentChanges });
//     }

//     changeEditingAppointment(editingAppointment) {
//         this.setState({ editingAppointment });
//     }

//     commitChanges({ added, changed, deleted }) {
//         this.setState((state) => {
//             let { data } = state;
//             if (added) {
//                 const startingAddedId = data.length > 0 ? data[data.length - 1].id + 1 : 0;
//                 data = [...data, { id: startingAddedId, ...added }];
//             }
//             if (changed) {
//                 data = data.map(appointment => (
//                     changed[appointment.id] ? { ...appointment, ...changed[appointment.id] } : appointment));
//             }
//             if (deleted !== undefined) {
//                 data = data.filter(appointment => appointment.id !== deleted);
//             }
//             return { data };
//         });
//     }

//     render() {
//         const {
//             currentDate, data, addedAppointment, appointmentChanges, editingAppointment, resources, mainResourceName, grouping, onChange, classes,
//         } = this.state;

//         return (
//             <React.Fragment>
//                 <ResourceSwitcher
//                     resources={resources}
//                     mainResourceName={mainResourceName}
//                     onChange={this.changeMainResource}
//                 />
//                 <Paper>
//                     <Scheduler
//                         data={data}
//                         height={800}
//                     >
//                         <ViewState
//                             currentDate={currentDate}
//                             onCurrentDateChange={this.currentDateChange}
//                             defaultCurrentDate={currentDate}
//                         />
//                         <EditingState
//                             onCommitChanges={this.commitChanges}

//                             addedAppointment={addedAppointment}
//                             onAddedAppointmentChange={this.changeAddedAppointment}

//                             appointmentChanges={appointmentChanges}
//                             onAppointmentChangesChange={this.changeAppointmentChanges}

//                             editingAppointment={editingAppointment}
//                             onEditingAppointmentChange={this.changeEditingAppointment}
//                         />
//                         <GroupingState
//                             grouping={grouping}
//                         />
//                         <IntegratedEditing />
//                         <DayView
//                             startDayHour={9}
//                             endDayHour={20}
//                             intervalCount={2}
//                         />
//                         <WeekView
//                             startDayHour={9}
//                             endDayHour={20}
//                         />
//                         <MonthView />
//                         <AllDayPanel />
//                         <EditRecurrenceMenu />
//                         <ConfirmationDialog
//                         />

//                         <Toolbar />
//                         <DateNavigator />
//                         <TodayButton />
//                         <ViewSwitcher />
//                         <Appointments
//                             appointmentComponent={appointmentComponent}
//                         />
//                         <AppointmentTooltip
//                             headerComponent={Header}
//                             contentComponent={Content}
//                             commandButtonComponent={CommandButton}
//                             showOpenButton
//                             showDeleteButton
//                         />
//                         <DragDropProvider
//                             allowDrag={allowDrag}
//                         />
//                         <AppointmentForm />

//                         <Resources
//                             data={resources}
//                             mainResourceName={mainResourceName}
//                         />
//                         <IntegratedGrouping />
//                         <IntegratedEditing />
//                         <GroupingPanel />
//                     </Scheduler>
//                 </Paper>
//                 <Crm />
//             </React.Fragment>
//         );
//     }
// }
import React from 'react';
import {
    ScheduleComponent,
    ResourcesDirective,
    ResourceDirective,
    ViewsDirective,
    ViewDirective,
    Inject,
    TimelineViews,
    Resize,
    DragAndDrop,
    TimelineMonth,
    Agenda,
    Day,
    WorkWeek,
    Month, CellClickEventArgs, ActionEventArgs
} from '@syncfusion/ej2-react-schedule';
import './external-drag-drop.css';
import { extend, closest, remove, addClass } from '@syncfusion/ej2-base';
import { SampleBase } from '../scheduler/sample-base';
import { TreeViewComponent } from '@syncfusion/ej2-react-navigations';
import { appointments, recurrenceAppointments, resourcesData } from '../scheduler/appointments';
import { addReminder, deleteReminder, clearReminders } from '../actions/index';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import Moment from 'react-moment';
import Draggable  from 'react-draggable';

// import * as dataSource from './datasource.json';
/**
 * schedule resources group-editing sample
 */
class Scheduler extends SampleBase {
    constructor(props) {
        super(...arguments);
        this.isTreeItemDropped = false;
        this.draggedItemId = '';
        this.allowDragAndDrops = true;
        this.fields = { appointments: appointments.waitingList, id: 'Id', text: 'Name' };
        this.data = extend([], resourcesData.resourcesData, null, true);
        this.departmentData = [
            { Text: 'PT', Id: 1, Color: '#bbdc00' },
            { Text: 'IV3A', Id: 2, Color: '#ffa500' }
        ];
        this.consultantData = [
            { Text: 'Hervé', Id: 1, GroupId: 1, Color: '#000080', Designation: 'Comercial' },
            { Text: 'Mariano', Id: 2, GroupId: 1, Color: '#ff0000', Designation: 'Marketing' },
            { Text: 'Dominique', Id: 3, GroupId: 1, Color: '#008000', Designation: 'CEO' },
            { Text: 'Fátima', Id: 4, GroupId: 2, Color: '#9e5fff', Designation: 'Sales' },
        ];
    }


    deleteReminder(id) {
        this.props.deleteReminder(id);
    }
    renderReminders() {
        const { reminders } = this.props;
        const calendarStrings = {
            nextDay: '[Tomorrow at] LT',
        }
        return (
            <div className="col-12">
                <ul className="list-group col-sm-12">
                    {
                        reminders.map(reminder => {
                            return (
                                <Card key={reminder.id} className="list-group-item" draggable >
                                    <div>
                                        <div className="list-item" onChange={event => this.setState({ select: event.target.value })}>{reminder.select}</div>
                                    </div>
                                    <div>
                                        <Moment calendar={calendarStrings} className="list-item">{reminder.selectedDate}</Moment>
                                    </div>
                                    <div>
                                        <div className="list-item">{reminder.text}</div>
                                    </div>
                                    <div>
                                        <div className="list-item delete-button"
                                            onClick={() => this.deleteReminder(reminder.id)}
                                        >
                                            &#x2715;
                                    </div>
                                        <Moment minDate={new Date(2020, 9, 13)} calendar={calendarStrings}>{reminder.minDate}</Moment>
                                        <br></br>
                                        <Moment type="text" maxDate={new Date(2020, 9, 15)} add={{ days: 2 }}>{reminder.maxDate}</Moment>
                                    </div>
                                </Card>
                            )
                        })
                    }
                </ul>
            </div>
        )

    }
    getConsultantName(value) {
        return value.resourceData[value.resource.textField];
    }
    getConsultantImage(value) {
        let resourceName = this.getConsultantName(value);
        return resourceName.toLowerCase();
    }
    getConsultantDesignation(value) {
        return value.resourceData.Designation;
    }
    resourceHeaderTemplate(props) {
        return (<div className="template-wrap"><div className="specialist-category"><div className={"specialist-image " + this.getConsultantImage(props)}></div><div className="specialist-name">
            {this.getConsultantName(props)}</div><div className="specialist-designation">{this.getConsultantDesignation(props)}</div></div></div>);
    }
    treeTemplate(props) {
        return (<div id="waiting"><div id="waitdetails"><div id="waitlist">{props.Name}</div>
            <div id="waitcategory">{props.DepartmentName} - {props.Description}</div></div></div>);
    }
    onItemDrag(event) {
        if (this.scheduleObj.isAdaptive) {
            let classElement = this.scheduleObj.element.querySelector('.e-device-hover');
            if (classElement) {
                classElement.classList.remove('e-device-hover');
            }
            if (event.target.classList.contains('e-work-cells')) {
                addClass([event.target], 'e-device-hover');
            }
        }
        if (document.body.style.cursor === 'not-allowed') {
            document.body.style.cursor = '';
        }
        if (event.name === 'nodeDragging') {
            let dragElementIcon = document.querySelectorAll('.e-drag-item.treeview-external-drag .e-icon-expandable');
            for (let i = 0; i < dragElementIcon.length; i++) {
                dragElementIcon[i].style.display = 'none';
            }
        }
    }
    onActionBegin(event) {
        if (event.requestType === 'eventCreate' && this.isTreeItemDropped) {
            let treeViewdata = this.treeObj.fields.dataSource;
            const filteredPeople = treeViewdata.filter((item) => item.Id !== parseInt(this.draggedItemId, 10));
            this.treeObj.fields.dataSource = filteredPeople;
            let elements = document.querySelectorAll('.e-drag-item.treeview-external-drag');
            for (let i = 0; i < elements.length; i++) {
                remove(elements[i]);
            }
        }
    }
    onTreeDragStop(event) {
        let treeElement = closest(event.target, '.e-treeview');
        let classElement = this.scheduleObj.element.querySelector('.e-device-hover');
        if (classElement) {
            classElement.classList.remove('e-device-hover');
        }
        if (!treeElement) {
            event.cancel = true;
            let scheduleElement = closest(event.target, '.e-content-wrap');
            if (scheduleElement) {
                let treeviewData = this.treeObj.fields.dataSource;
                if (event.target.classList.contains('e-work-cells')) {
                    const filteredData = treeviewData.filter((item) => item.Id === parseInt(event.draggedNodeData.id, 10));
                    let cellData = this.scheduleObj.getCellDetails(event.target);
                    let resourceDetails = this.scheduleObj.getResourcesByIndex(cellData.groupIndex);
                    let eventData = {
                        Name: filteredData[0].Name,
                        StartTime: cellData.startTime,
                        EndTime: cellData.endTime,
                        IsAllDay: cellData.isAllDay,
                        Description: filteredData[0].Description,
                        DepartmentID: resourceDetails.resourceData.GroupId,
                        ConsultantID: resourceDetails.resourceData.Id
                    };
                    this.scheduleObj.openEditor(eventData, 'Add', true);
                    this.isTreeItemDropped = true;
                    this.draggedItemId = event.draggedNodeData.id;
                }
            }
        }
    }

    render() {
        return (<div className='schedule-control-section'>
            <div className='col-lg-12 control-section'>
                <div className='control-wrapper drag-sample-wrapper'>
                    <div className="schedule-container">
                        <div className="title-container">
                            <h1 className="title-text">Employer's Appointments</h1>
                        </div>
                        <ScheduleComponent ref={schedule => this.scheduleObj = schedule} cssClass='schedule-drag-drop' width='100%' height='650px' selectedDate={new Date(2020, 9, 1)} currentView='TimelineDay' resourceHeaderTemplate={this.resourceHeaderTemplate.bind(this)} eventSettings={{
                            dataSource: this.data,
                            fields: {
                                subject: { title: 'Client Name', name: 'Name' },
                                startTime: { title: "From", name: "StartTime" },
                                endTime: { title: "To", name: "EndTime" },
                                description: { title: 'Reason', name: 'Description' }
                            }
                        }} group={{ enableCompactView: false, resources: ['Departments', 'Consultants'] }} actionBegin={this.onActionBegin.bind(this)} drag={this.onItemDrag.bind(this)}>
                            <ResourcesDirective>
                                <ResourceDirective field='DepartmentID' title='Department' name='Departments' allowMultiple={false} dataSource={this.departmentData} textField='Text' idField='Id' colorField='Color'>
                                </ResourceDirective>
                                <ResourceDirective field='ConsultantID' title='Consultant' name='Consultants' allowMultiple={false} dataSource={this.consultantData} textField='Text' idField='Id' groupIDField="GroupId" colorField='Color'>
                                </ResourceDirective>
                            </ResourcesDirective>
                            <ViewsDirective>
                                <ViewDirective option='TimelineDay' />
                                <ViewDirective option='TimelineMonth' />
                                <ViewDirective option='Month' />
                                {/* <ViewDirective option='Week'/> */}
                                <ViewDirective option='WorkWeek' />
                                <ViewDirective option='Agenda' />
                            </ViewsDirective>
                            <Inject services={[TimelineViews, TimelineMonth, Resize, DragAndDrop, Agenda, Day, Month, WorkWeek]} />
                        </ScheduleComponent>
                    </div>
                    <div className="treeview-container">
                        <div className="title-container">
                            <h1 className="title-text">Waiting List</h1>
                        </div>
                        <TreeViewComponent ref={tree => this.treeObj = tree}
                            cssClass='treeview-external-drag'
                            nodeTemplate={this.treeTemplate.bind(this)}
                            fields={this.fields}
                            nodeDragStop={this.onTreeDragStop.bind(this)}
                            nodeDragging={this.onItemDrag.bind(this)}
                            allowDragAndDrop={this.allowDragAndDrops}>{this.renderReminders()}</TreeViewComponent>
                    </div>
                </div>
            </div>
        </div>);
    }
}

function mapStateToProps(state) {
    console.log('state', state);
    return {
        reminders: state,
    }
}



export default connect(mapStateToProps, { addReminder, deleteReminder, clearReminders })(Scheduler)