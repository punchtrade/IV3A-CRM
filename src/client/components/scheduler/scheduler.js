// import React from 'react';
// import {
//     ScheduleComponent,
//     ResourcesDirective,
//     ResourceDirective,
//     ViewsDirective,
//     ViewDirective,
//     Inject,
//     TimelineViews,
//     Resize,
//     DragAndDrop,
//     TimelineMonth,
//     Agenda,
//     Day,
//     WorkWeek,
//     Month,
// } from '@syncfusion/ej2-react-schedule';
// import './external-drag-drop.css';
// import { extend, closest, remove, addClass } from '@syncfusion/ej2-base';
// import { SampleBase } from '../scheduler/sample-base';
// import { TreeViewComponent } from '@syncfusion/ej2-react-navigations';
// import { appointments, resourcesData } from '../scheduler/appointments';
// import { connect } from 'react-redux';
// import axios from 'axios';

// class Scheduler extends SampleBase {
//     constructor(props) {
//         super(...arguments);
//         this.state = {
//             Id: '',
//             Text: '',
//             StartTime: '',
//             EndTime: '',
//             IsAllDay: '',
//             Description: '',
//             DepartmentID: '',
//             Designation: '',
//         }
//         this.isTreeItemDropped = false;
//         this.draggedItemId = '';
//         this.allowDragAndDrops = true;
//         this.fields = { appointments: appointments.waitingList, id: 'Id', text: 'Name' };
//         this.data = extend([], resourcesData.resourcesData, null, true);
//         this.departmentData = [
//             { Text: 'PT', Id: 1, Color: '#bbdc00' },
//             { Text: 'IV3A', Id: 2, Color: '#ffa500' }
//         ];
//         this.consultantData = [
//             { Text: 'Hervé', Id: 1, GroupId: 1, Color: '#000080', Designation: 'Comercial' },
//             { Text: 'Mariano', Id: 2, GroupId: 1, Color: '#ff0000', Designation: 'Marketing' },
//             { Text: 'Dominique', Id: 3, GroupId: 1, Color: '#008000', Designation: 'CEO' },
//             { Text: 'Fátima', Id: 4, GroupId: 2, Color: '#9e5fff', Designation: 'Sales' },
//         ];
//         this.reminderData = [
//             { Id: 1, Text: 'Commande par IV3A', StartTime: '3 jours', EndTime: '',IsAllDay: '', Description: 'Avec sélection véhicule', DepartmentID: 'PT',Designation: 'Comercial' },
//             { Id: 2, Text: 'Vérification par IV3A', StartTime: '3 jours', EndTime: '',IsAllDay: '', Description: 'Commande/Fiche Client', DepartmentID: 'IV3A',Designation: '' },
//             { Id: 3, Text: 'Signalement par IV3A', StartTime: '3 jours', EndTime: '',IsAllDay: '', Description: 'Nouvelle Commande', DepartmentID: 'IV3A',Designation: '' },
//             { Id: 4, Text: 'Vérifier de disposition', StartTime: '3 jours', EndTime: '',IsAllDay: '', Description: 'Réservation á RRG', DepartmentID: 'PT',Designation: '' },
//             { Id: 5, Text: 'Proposition ', StartTime: '3 jours', EndTime: '',IsAllDay: '', Description: 'Véhicule équivalent', DepartmentID: 'PT',Designation: '' },
//             { Id: 6, Text: 'Confirmation disponib.', StartTime: '3 jours', EndTime: '',IsAllDay: '', Description: 'Génération proforma ', DepartmentID: 'PT',Designation: '' },        
//         ];
//         this.dataSource = { readRequest: this.state, editingFollowingEvents: true };
//     }

//     componentDidMount = async (e) => {
//        await axios.post("http://localhost:9000/scheduler/new/:idUser", this.state, {
//            headers: {"Content-Type": "application/json"},
//        })
//        .then((response) => {
//            console.log(response);
//        })
//        .catch((error) => {
//            console.log(error);
//        })
//     }

//     onDragStart(args) {
//         args.navigation = { enable: true, timeDelay: 4000 };
//     }

//     getConsultantName(value) {
//         return value.resourceData[value.resource.textField];
//     }
//     getConsultantImage(value) {
//         let resourceName = this.getConsultantName(value);
//         return resourceName.toLowerCase();
//     }
//     getConsultantDesignation(value) {
//         return value.resourceData.Designation;
//     }
//     resourceHeaderTemplate(props) {
//         return (<div className="template-wrap"><div className="specialist-category"><div className={"specialist-image " + this.getConsultantImage(props)}></div><div className="specialist-name">
//             {this.getConsultantName(props)}</div><div className="specialist-designation">{this.getConsultantDesignation(props)}</div></div></div>);
//     }
//     treeTemplate(props) {
//     return (<div id="waiting">{props.Id}<div id="waitdetails">{props.Text} - {props.StartTime}<div id="waitlist"></div>
//             <div id="waiting">{props.DepartmentID} - {props.Description}</div></div></div>);
//     }
//     onItemDrag(event) {
//         if (this.scheduleObj.isAdaptive) {
//             let classElement = this.scheduleObj.element.querySelector('.e-device-hover');
//             if (classElement) {
//                 classElement.classList.remove('e-device-hover');
//             }
//             if (event.target.classList.contains('e-work-cells')) {
//                 addClass([event.target], 'e-device-hover');
//             }
//         }
//         if (document.body.style.cursor === 'not-allowed') {
//             document.body.style.cursor = '';
//         }
//         if (event.name === 'nodeDragging') {
//             let dragElementIcon = document.querySelectorAll('.e-drag-item.treeview-external-drag .e-icon-expandable');
//             for (let i = 0; i < dragElementIcon.length; i++) {
//                 dragElementIcon[i].style.display = 'none';
//             }
//         }
//     }
//     onActionBegin(event) {
//         if (event.requestType === 'eventCreate' && this.isTreeItemDropped) {
//             let treeViewdata = this.treeObj.fields.dataSource;
//             const filteredPeople = treeViewdata.filter((item) => item.id !== parseInt(this.draggedItemId, 10));
//             this.treeObj.fields.dataSource = filteredPeople;
//             let elements = document.querySelectorAll('.e-drag-item.treeview-external-drag');
//             for (let i = 0; i < elements.length; i++) {
//                 remove(elements[i]);
//             }
//         }
//     }
//     onTreeDragStop(event) {
//         let treeElement = closest(event.target, '.e-treeview');
//         let classElement = this.scheduleObj.element.querySelector('.e-device-hover');
//         if (classElement) {
//             classElement.classList.remove('e-device-hover');
//         }
//         if (!treeElement) {
//             event.cancel = true;
//             let scheduleElement = closest(event.target, '.e-content-wrap');
//             if (scheduleElement) {
//                 let treeviewData = this.treeObj.fields.dataSource;
//                 if (event.target.classList.contains('e-work-cells')) {
//                     const filteredData = treeviewData.filter((item) => item.id === parseInt(event.draggedNodeData.id, 10));
//                     let cellData = this.scheduleObj.getCellDetails(event.target);
//                     let resourceDetails = this.scheduleObj.getResourcesByIndex(cellData.groupIndex);
//                     let eventData = {
//                         Text: filteredData.text,
//                         StartTime: cellData.startTime,
//                         EndTime: cellData.endTime,
//                         IsAllDay: cellData.isAllDay,
//                         Description: filteredData.Description,                       
//                         DepartmentID: resourceDetails.resourceData.GroupId,
//                         ConsultantID: resourceDetails.resourceData.Id
//                     };
//                     this.scheduleObj.openEditor(eventData, 'Add', true);
//                     this.isTreeItemDropped = true;
//                     this.draggedItemId = event.draggedNodeData.id;

//                 }
//             }
//         }
//     }

//     render() {
//         const {
//             Id,
//             Text,
//             StartTime,
//             EndTime,
//             IsAllDay,
//             Description,
//             DepartmentID,
//             Designation,
//         } = this.state;
//         return (<div className='schedule-control-section'>
//             <div className='col-lg-12 control-section'>
//                 <div className='control-wrapper drag-sample-wrapper'>
//                     <div className="schedule-container">
//                         <div className="title-container">
//                             <h1 className="title-text">Nominations de l'employeur</h1>
//                         </div>
//                         <ScheduleComponent
//                             ref={schedule => this.scheduleObj = schedule}
//                             cssClass='schedule-drag-drop'
//                             width='100%' height='650px'
//                             selectedDate={new Date(2020, 9, 1)}
//                             currentView='TimelineDay'
//                             resourceHeaderTemplate={this.resourceHeaderTemplate.bind(this)}
//                             eventSettings={{
//                                 dataSource: this.data,
//                                 fields: {
//                                     subject: { title: 'Client Name', name: 'Name' },
//                                     startTime: { title: "From", name: "StartTime" },
//                                     endTime: { title: "To", name: "EndTime" },
//                                     description: { title: 'Reason', name: 'Description' }
//                                 }
//                             }}
//                             group={{ enableCompactView: false, resources: ['Departments', 'Consultants'] }}
//                             actionBegin={this.onActionBegin.bind(this)}
//                             drag={this.onItemDrag.bind(this)}>
//                             <ResourcesDirective>
//                                 <ResourceDirective
//                                     field='DepartmentID'
//                                     title='Department' name='Departments'
//                                     allowMultiple={false}
//                                     dataSource={this.departmentData}
//                                     textField='Text'
//                                     idField='Id'
//                                     colorField='Color'>
//                                 </ResourceDirective>
//                                 <ResourceDirective
//                                     field='ConsultantID'
//                                     title='Consultant'
//                                     name='Consultants'
//                                     allowMultiple={false}
//                                     dataSource={this.consultantData}
//                                     textField='Text'
//                                     idField='Id'
//                                     groupIDField="GroupId"
//                                     colorField='Color'>
//                                 </ResourceDirective>
//                             </ResourcesDirective>
//                             <ViewsDirective>
//                                 <ViewDirective option='TimelineDay' />
//                                 <ViewDirective option='TimelineMonth' />
//                                 <ViewDirective option='Month' />
//                                 <ViewDirective option='WorkWeek' />
//                                 <ViewDirective option='Agenda' />
//                             </ViewsDirective>
//                             <Inject services={[TimelineViews, TimelineMonth, Resize, DragAndDrop, Agenda, Day, Month, WorkWeek]} />
//                         </ScheduleComponent>
//                     </div>
//                     <div className="treeview-container">
//                         <div className="title-container">
//                             <h1 className="title-text">Liste d'attente</h1>
//                         </div>
//                         <TreeViewComponent ref={tree => this.treeObj = tree}
//                             cssClass='treeview-external-drag'
//                             nodeTemplate={this.treeTemplate.bind(this)}
//                             fields={{
//                                 dataSource: this.reminderData,
//                                 fields: {
//                                     Text: this.state.text,
//                                     StartTime: this.state.startTime,
//                                     EndTime: this.state.endTime,
//                                     IsAllDay: this.state.isAllDay,
//                                     Description: this.state.Description,
//                                     DepartmentID: this.state.GroupId,
//                                     ConsultantID: this.state.Id
//                                 }
//                             }}
//                             dragStart={(this.onDragStart.bind(this))}
//                             nodeDragStop={this.onTreeDragStop.bind(this)}
//                             nodeDragging={this.onItemDrag.bind(this)}
//                             eventSettings={this.reminderData}
//                             dataSource={this.reminderData}
//                             onChange={this.componentDidMount}
//                             allowDragAndDrop={this.allowDragAndDrops}>
//                         </TreeViewComponent>
//                     </div>
//                 </div>
//             </div>
//         </div>);
//     }
// }

// function mapStateToProps(state) {
//     console.log('state', state);
//     return {
//         reminders: state,
//     }
// }

// export default connect(mapStateToProps)(Scheduler)
// import * as React from 'react';
// import Paper from '@material-ui/core/Paper';
// import IconButton from '@material-ui/core/IconButton';
// import InfoIcon from '@material-ui/icons/Info';
// import Select from '@material-ui/core/Select';
// import MenuItem from '@material-ui/core/MenuItem';
// import { withStyles, fade } from '@material-ui/core/styles';
// import { ViewState, EditingState, IntegratedEditing, GroupingState, IntegratedGrouping, } from '@devexpress/dx-react-scheduler';
// import {
//     WeekView,
//     Toolbar,
//     ViewSwitcher,
//     MonthView,
//     Scheduler,
//     DateNavigator,
//     TodayButton,
//     DayView,
//     Resources,
//     Appointments,
//     AppointmentTooltip,
//     AppointmentForm,
//     ConfirmationDialog,
//     DragDropProvider,
//     EditRecurrenceMenu,
//     AllDayPanel,
//     GroupingPanel,
// } from '@devexpress/dx-react-scheduler-material-ui';
// import LowPriority from '@material-ui/icons/LowPriority';
// import PriorityHigh from '@material-ui/icons/PriorityHigh';
// import { appointments, resourcesData, appointmentsMonth } from '../scheduler/appointments';
// import recurrenceAppointments from '../scheduler/recurrence-appointments';
// import { owners } from '../scheduler/tasks';
// import {
//     teal, indigo, green, orange, red
// } from '@material-ui/core/colors';
// import { connect } from 'react-redux';
// import moment from 'moment';


// const styles = theme => ({
//     button: {
//         color: theme.palette.background.default,
//         padding: 0,
//     },
//     container: {
//         display: 'flex',
//         marginBottom: theme.spacing(2),
//         justifyContent: 'flex-end',
//     },
//     text: {
//         paddingTop: theme.spacing(1),
//         overflow: 'hidden',
//         textOverflow: 'ellipsis',
//         whiteSpace: 'nowrap',
//     },

// });
// const ResourceSwitcher = withStyles(styles, { name: 'ResourceSwitcher' })(
//     ({
//         mainResourceName, onChange, classes, resources,
//     }) => (
//             <div className={classes.container}>
//                 <div className={classes.text}>
//                     Nom de la ressource principale:
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
// const priorityData = [
//     { text: 'Low Priority', id: 1, color: green },
//     { text: 'Medium Priority', id: 2, color: indigo },
//     { text: 'High Priority', id: 3, color: orange },

// ];

// const findColorByGroupId = id => (priorityData.find(item => item.id === id)).color;
// const getIconById = id => (id === 1 ? LowPriority : PriorityHigh);
// const messages = {
//     moreInformationLabel: '',
// };
// const TextEditor = (props) => {
//     // eslint-disable-next-line react/destructuring-assignment
//     if (props.type === 'multilineTextEditor') {
//         return null;
//     } return <AppointmentForm.TextEditor {...props} />;
// };
// const BasicLayout = ({ onFieldChange, appointmentData, ...restProps }) => {
//     const onCustomFieldChange = (nextValue) => {
//         onFieldChange({ customField: nextValue });
//     };
//     return (
//         <AppointmentForm.BasicLayout
//             appointmentData={appointmentData}
//             fullSize
//             onFieldChange={onFieldChange}
//             {...restProps}
//         >
//             <AppointmentForm.Label
//                 text="Custom Field"
//                 type="title"
//             />
//             <AppointmentForm.TextEditor
//                 value={appointmentData.customField}
//                 onValueChange={onCustomFieldChange}
//                 placeholder="Custom field"
//             />
//         </AppointmentForm.BasicLayout>
//     );
// };
// const dragDisableIds = new Set([3, 8, 10, 12]);

// const allowDrag = ({ id }) => !dragDisableIds.has(id);
// const appointmentComponent = (props) => {
//     if (allowDrag(props.data)) {
//         return <Appointments.Appointment {...props} />;
//     } return <Appointments.Appointment {...props} style={{ ...props.style, cursor: 'not-allowed' }} />;
// };

// const locations = [
//     { text: 'PT', id: 1 , color: teal},
//     { text: 'IV3A', id: 2 , color: red},
// ];

// const SHIFT_KEY = 16;

// const date = moment().toDate();

// class Calendar extends React.PureComponent {
//     constructor(props) {
//         super(props);
//         this.state = {
//             data: appointments, recurrenceAppointments, appointmentsMonth, resourcesData,
//             currentViewName: 'work-week',
//             currentDate: date,
//             mainResourceName: 'members',
//             isShiftPressed: false,
//             resources: [{
//                 fieldName: 'members',
//                 title: 'Membres',
//                 instances: owners,
//                 allowMultiple: true,
//             }, {
//                 fieldName: 'roomId',
//                 title: 'Emplacement',
//                 instances: locations,
//             }],
//             grouping: [{
//                 resourceName: 'roomId',
//             }, {
//                 resourceName: 'members',
//             }],
//         };
//         this.changeMainResource = this.changeMainResource.bind(this);


//         this.currentViewNameChange = (currentViewName) => {
//             this.setState({ currentViewName });
//             this.commitChanges = this.commitChanges.bind(this);
//             this.onKeyDown = this.onKeyDown.bind(this);
//             this.onKeyUp = this.onKeyUp.bind(this);

//         };

//     }
//     changeMainResource(mainResourceName) {
//         this.setState({ mainResourceName });

//     }
//     componentDidMount() {
//         window.addEventListener('keydown', this.onKeyDown);
//         window.addEventListener('keyup', this.onKeyUp);
//     }

//     componentWillUnmount() {
//         window.removeEventListener('keydown');
//         window.removeEventListener('keyup');
//     }

//     onKeyDown(event) {
//         if (event.keyCode === SHIFT_KEY) {
//             this.setState({ isShiftPressed: true });
//         }
//     }

//     onKeyUp(event) {
//         if (event.keyCode === SHIFT_KEY) {
//             this.setState({ isShiftPressed: false });
//         }
//     }
//     commitChanges({ added, changed, deleted }) {
//         this.setState((state) => {
//             let { data } = state;
//             const { isShiftPressed } = this.state;
//             if (added) {
//                 const startingAddedId = data.length > 0 ? data[data.length - 1].id + 1 : 0;
//                 data = [...data, { id: startingAddedId, ...added }];
//             }
//             if (changed) {
//                 if (isShiftPressed) {
//                     const changedAppointment = data.find(appointment => changed[appointment.id]);
//                     const startingAddedId = data.length > 0 ? data[data.length - 1].id + 1 : 0;
//                     data = [
//                         ...data,
//                         { ...changedAppointment, id: startingAddedId, ...changed[changedAppointment.id] },
//                     ];
//                 } else {
//                     data = data.map(appointment => (
//                         changed[appointment.id]
//                             ? { ...appointment, ...changed[appointment.id] }
//                             : appointment));
//                 }
//             }
//             if (deleted !== undefined) {
//                 data = data.filter(appointment => appointment.id !== deleted);
//             }
//             return { data };
//         });
//     }

//     render() {
//         const { data, currentViewName, currentDate, mainResourceName, resources } = this.state;

//         return (
//             <React.Fragment>
//                 <Paper>
//                     <ResourceSwitcher
//                         resources={resources}
//                         mainResourceName={mainResourceName}
//                         onChange={this.changeMainResource}
//                     />
//                     <Scheduler
//                         data={data}
//                         height={660}
//                     >
//                         <ViewState
//                             currentViewName={currentViewName}
//                             currentDate={currentDate}
//                             onCurrentViewNameChange={this.currentViewNameChange}
//                         />
//                         <EditingState
//                             onCommitChanges={this.commitChanges}
//                         />
//                         <IntegratedEditing />
//                         <DayView
//                             startDayHour={9}
//                             endDayHour={19}
//                             intervalCount={2}
//                         />
//                         <EditRecurrenceMenu />
//                         <WeekView
//                             name="work-week"
//                             displayName="Work Week"
//                             excludedDays={[0, 6]}
//                             startDayHour={9}
//                             endDayHour={19}
//                         />
//                         <MonthView />
//                         <DayView
//                             startDayHour={8}
//                             endDayHour={13}
//                         />
//                         <ConfirmationDialog
//                         />
//                         <Toolbar />
//                         <DateNavigator />
//                         <TodayButton />
//                         <ViewSwitcher />
//                         <Appointments
//                             basicLayoutComponent={BasicLayout}
//                             textEditorComponent={TextEditor}
//                             messages={messages}
//                             appointmentComponent={appointmentComponent}
//                         />
//                         <AllDayPanel />
//                         <DragDropProvider
//                             allowDrag={allowDrag}
//                         />
//                         <AppointmentTooltip
//                             showCloseButton
//                             showOpenButton
//                             showDeleteButton />
//                         <Resources
//                             data={resources}
//                             mainResourceName="members"
//                         />
//                         <AppointmentForm
//                         />
//                         <DragDropProvider />
//                     </Scheduler>
//                 </Paper>
//             </React.Fragment>
//         );
//     }
// }

// function mapStateToProps(state) {
//     console.log('state', state);
//     return {
//         reminders: state,
//     }
// }

// export default connect(mapStateToProps)(Calendar);
import * as React from 'react';
// #FOLD_BLOCK
import {
    ViewState,
    GroupingState,
    IntegratedGrouping,
    IntegratedEditing,
    EditingState
} from '@devexpress/dx-react-scheduler';
// #FOLD_BLOCK
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
import { connectProps } from '@devexpress/dx-react-core';
import { withStyles, makeStyles, fade } from '@material-ui/core/styles';
import PriorityHigh from '@material-ui/icons/PriorityHigh';
import LowPriority from '@material-ui/icons/LowPriority';
import Lens from '@material-ui/icons/Lens';
import Event from '@material-ui/icons/Event';
import AccessTime from '@material-ui/icons/AccessTime';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import classNames from 'clsx';
import { owners } from '../scheduler/tasks';
import {
    teal, indigo, green, orange, red
} from '@material-ui/core/colors';
import { priorities } from '../scheduler/tasks';
import { appointments } from '../scheduler/appointments';
import { data as tasks } from '../scheduler/grouping';
import moment from 'moment';

const grouping = [{
    resourceName: 'priorityId',
}];

const filterTasks = (items, priorityId) => items.filter(task => (
    !priorityId || task.priorityId === priorityId
));

const getIconById = (id) => {
    if (id === 1) {
        return LowPriority;
    }
    if (id === 2) {
        return Event;
    }
    return PriorityHigh;
};

// #FOLD_BLOCK
const styles = theme => ({
    flexibleSpace: {
        margin: '0 auto 0 0',
    },
    prioritySelector: {
        marginLeft: theme.spacing(2),
        minWidth: 140,
        '@media (max-width: 500px)': {
            minWidth: 0,
            fontSize: '0.75rem',
            marginLeft: theme.spacing(0.5),
        },
    },
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
// #FOLD_BLOCK
const usePrioritySelectorItemStyles = makeStyles(({ palette, spacing }) => ({
    bullet: ({ color }) => ({
        backgroundColor: color ? color[400] : palette.divider,
        borderRadius: '50%',
        width: spacing(2),
        height: spacing(2),
        marginRight: spacing(2),
        display: 'inline-block',
    }),
    prioritySelectorItem: {
        display: 'flex',
        alignItems: 'center',
    },
    priorityText: {
        '@media (max-width: 500px)': {
            display: 'none',
        },
    },
    priorityShortText: {
        '@media (min-width: 500px)': {
            display: 'none',
        },
    },
}));
// #FOLD_BLOCK
const useTooltipContentStyles = makeStyles(theme => ({
    content: {
        padding: theme.spacing(3, 1),
        paddingTop: 0,
        backgroundColor: theme.palette.background.paper,
        boxSizing: 'border-box',
        width: '400px',
    },
    contentContainer: {
        paddingBottom: theme.spacing(1.5),
    },
    text: {
        ...theme.typography.body2,
        display: 'inline-block',
    },
    title: {
        ...theme.typography.h6,
        color: theme.palette.text.secondary,
        fontWeight: theme.typography.fontWeightBold,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'normal',
    },
    icon: {
        verticalAlign: 'middle',
    },
    contentItemIcon: {
        textAlign: 'center',
    },
    grayIcon: {
        color: theme.palette.action.active,
    },
    colorfulContent: {
        color: ({ color }) => color[300],
    },
    lens: {
        width: theme.spacing(4.5),
        height: theme.spacing(4.5),
        verticalAlign: 'super',
    },
    textCenter: {
        textAlign: 'center',
    },
    dateAndTitle: {
        lineHeight: 1.1,
    },
    titleContainer: {
        paddingBottom: theme.spacing(2),
    },
    container: {
        paddingBottom: theme.spacing(1.5),
    },
}));
// #FOLD_BLOCK
const groupingStyles = ({ spacing }) => ({
    ...priorities.reduce((acc, priority) => ({
        ...acc,
        [`cell${priority.text.replace(' ', '')}`]: {
            backgroundColor: fade(priority.color[400], 0.1),
            '&:hover': {
                backgroundColor: fade(priority.color[400], 0.15),
            },
            '&:focus': {
                backgroundColor: fade(priority.color[400], 0.2),
            },
        },
        [`headerCell${priority.text.replace(' ', '')}`]: {
            backgroundColor: fade(priority.color[400], 0.1),
            '&:hover': {
                backgroundColor: fade(priority.color[400], 0.1),
            },
            '&:focus': {
                backgroundColor: fade(priority.color[400], 0.1),
            },
        },
    }), {}),
    icon: {
        paddingLeft: spacing(1),
        verticalAlign: 'middle',
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
// const getIconById = id => (id === 1 ? LowPriority : PriorityHigh);
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
    { text: 'PT', id: 1, color: teal },
    { text: 'IV3A', id: 2, color: red },
];

const SHIFT_KEY = 16;

const date = moment().toDate();

const DayViewTimeTableCell = withStyles(groupingStyles, { name: 'DayViewTimeTableCell' })(({
    groupingInfo, classes, ...restProps
}) => {
    const groupId = groupingInfo[0].id;
    return (
        <DayView.TimeTableCell
            className={classNames({
                [classes.cellLowPriority]: groupId === 1,
                [classes.cellMediumPriority]: groupId === 2,
                [classes.cellHighPriority]: groupId === 3,
            })}
            groupingInfo={groupingInfo}
            {...restProps}
        />
    );
});
// #FOLD_BLOCK
const DayViewDayScaleCell = withStyles(groupingStyles, { name: 'DayViewDayScaleCell' })(({
    groupingInfo, classes, ...restProps
    // #FOLD_BLOCK
}) => {
    const groupId = groupingInfo[0].id;
    return (
        <DayView.DayScaleCell
            className={classNames({
                [classes.headerCellLowPriority]: groupId === 1,
                [classes.headerCellMediumPriority]: groupId === 2,
                [classes.headerCellHighPriority]: groupId === 3,
            })}
            groupingInfo={groupingInfo}
            {...restProps}
        />
    );
});
// #FOLD_BLOCK
const WeekViewTimeTableCell = withStyles(groupingStyles, { name: 'WeekViewTimeTableCell' })(({
    groupingInfo, classes, ...restProps
    // #FOLD_BLOCK
}) => {
    const groupId = groupingInfo[0].id;
    return (
        <WeekView.TimeTableCell
            className={classNames({
                [classes.cellLowPriority]: groupId === 1,
                [classes.cellMediumPriority]: groupId === 2,
                [classes.cellHighPriority]: groupId === 3,
            })}
            groupingInfo={groupingInfo}
            {...restProps}
        />
    );
});
// #FOLD_BLOCK
const WeekViewDayScaleCell = withStyles(groupingStyles, { name: 'WeekViewDayScaleCell' })(({
    groupingInfo, classes, ...restProps
    // #FOLD_BLOCK
}) => {
    const groupId = groupingInfo[0].id;
    return (
        <WeekView.DayScaleCell
            className={classNames({
                [classes.headerCellLowPriority]: groupId === 1,
                [classes.headerCellMediumPriority]: groupId === 2,
                [classes.headerCellHighPriority]: groupId === 3,
            })}
            groupingInfo={groupingInfo}
            {...restProps}
        />
    );
});
// #FOLD_BLOCK
const AllDayCell = withStyles(groupingStyles, { name: 'AllDayCell' })(({
    groupingInfo, classes, ...restProps
    // #FOLD_BLOCK
}) => {
    const groupId = groupingInfo[0].id;
    return (
        <AllDayPanel.Cell
            className={classNames({
                [classes.cellLowPriority]: groupId === 1,
                [classes.cellMediumPriority]: groupId === 2,
                [classes.cellHighPriority]: groupId === 3,
            })}
            groupingInfo={groupingInfo}
            {...restProps}
        />
    );
});
// #FOLD_BLOCK
const GroupingPanelCell = withStyles(groupingStyles, { name: 'GroupingPanelCell' })(({
    group, classes, ...restProps
    // #FOLD_BLOCK
}) => {
    const groupId = group.id;
    const Icon = getIconById(groupId);
    return (
        <GroupingPanel.Cell
            className={classNames({
                [classes.headerCellLowPriority]: groupId === 1,
                [classes.headerCellMediumPriority]: groupId === 2,
                [classes.headerCellHighPriority]: groupId === 3,
            })}
            group={group}
            {...restProps}
        >
            <Icon
                className={classes.icon}
            />
        </GroupingPanel.Cell>
    );
});

const PrioritySelectorItem = ({
    color, text: resourceTitle,
}) => {
    const text = resourceTitle || 'All Tasks';
    const shortText = resourceTitle ? text.substring(0, 1) : 'All';
    const classes = usePrioritySelectorItemStyles({ color });

    return (
        <div className={classes.prioritySelectorItem}>
            <span className={classes.bullet} />
            <span className={classes.priorityText}>{text}</span>
            <span className={classes.priorityShortText}>{shortText}</span>
        </div>
    );
};

const PrioritySelector = withStyles(styles, { name: 'PrioritySelector' })(({
    classes, priorityChange, priority,
}) => {
    const currentPriority = priority > 0 ? priorities[priority - 1] : {};
    return (
        <FormControl className={classes.prioritySelector}>
            <Select
                disableUnderline
                value={priority}
                onChange={(e) => {
                    priorityChange(e.target.value);
                }}
                renderValue={() => (
                    <PrioritySelectorItem text={currentPriority.text} color={currentPriority.color} />
                )}
            >
                <MenuItem value={0}>
                    <PrioritySelectorItem />
                </MenuItem>
                {priorities.map(({ id, color, text }) => (
                    <MenuItem value={id} key={id.toString()}>
                        <PrioritySelectorItem color={color} text={text} />
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
});

const FlexibleSpace = withStyles(styles, { name: 'FlexibleSpace' })(({
    classes, priority, priorityChange, ...restProps
}) => (
        <Toolbar.FlexibleSpace {...restProps} className={classes.flexibleSpace}>
            <PrioritySelector priority={priority} priorityChange={priorityChange} />
        </Toolbar.FlexibleSpace>
    ));
// #FOLD_BLOCK
const TooltipContent = ({
    appointmentData, formatDate, appointmentResources,
    // #FOLD_BLOCK
}) => {
    const resource = appointmentResources[0];
    const classes = useTooltipContentStyles({ color: resource.color });
    let icon = <LowPriority className={classes.icon} />;
    if (appointmentData.priorityId === 2) {
        icon = <Event className={classes.icon} />;
    }
    if (appointmentData.priorityId === 3) {
        icon = <PriorityHigh className={classes.icon} />;
    }
    return (
        <div className={classes.content}>
            <Grid container alignItems="flex-start" className={classes.titleContainer}>
                <Grid item xs={2} className={classNames(classes.textCenter)}>
                    <Lens className={classNames(classes.lens, classes.colorfulContent)} />
                </Grid>
                <Grid item xs={10}>
                    <div>
                        <div className={classNames(classes.title, classes.dateAndTitle)}>
                            {appointmentData.title}
                        </div>
                        <div className={classNames(classes.text, classes.dateAndTitle)}>
                            {formatDate(appointmentData.startDate, { day: 'numeric', weekday: 'long' })}
                        </div>
                    </div>
                </Grid>
            </Grid>
            <Grid container alignItems="center" className={classes.contentContainer}>
                <Grid item xs={2} className={classes.textCenter}>
                    <AccessTime className={classes.icon} />
                </Grid>
                <Grid item xs={10}>
                    <div className={classes.text}>
                        {`${formatDate(appointmentData.startDate, { hour: 'numeric', minute: 'numeric' })}
              - ${formatDate(appointmentData.endDate, { hour: 'numeric', minute: 'numeric' })}`}
                    </div>
                </Grid>
            </Grid>
            <Grid container alignItems="center" key={`${resource.fieldName}_${resource.id}`}>
                <Grid
                    className={classNames(classes.contentItemIcon, classes.icon, classes.colorfulContent)}
                    item
                    xs={2}
                >
                    {icon}
                </Grid>
                <Grid item xs={10}>
                    <span className={classNames(classes.text, classes.colorfulContent)}>
                        {resource.text}
                    </span>
                </Grid>
            </Grid>
        </div>
    );
};

export default class Demo extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            currentDate: '2020-11-01',
            currentViewName: 'Month',
            data: tasks,
            data: appointments,
            currentPriority: 0,
            resources: [{
                fieldName: 'priorityId',
                title: 'Priorité',
                instances: priorities,
            },
            {
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
        };
        this.currentDateChange = (currentDate) => {
            this.setState({ currentDate });
        };
        this.priorityChange = (value) => {
            const { resources } = this.state;
            const nextResources = [{
                ...resources[0],
                instances: value > 0 ? [priorities[value - 1]] : priorities,
            }];

            this.setState({ currentPriority: value, resources: nextResources });
        };
        this.flexibleSpace = connectProps(FlexibleSpace, () => {
            const { currentPriority } = this.state;
            return {
                priority: currentPriority,
                priorityChange: this.priorityChange,
            };
        });
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
    componentDidUpdate() {
        this.flexibleSpace.update(); // #IMPORTANT_LINE
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
        const {
            data, currentDate, currentViewName, currentPriority, resources, mainResourceName,
        } = this.state;

        return (
            <React.Fragment>
                <Paper>
                    <ResourceSwitcher
                        resources={resources}
                        mainResourceName={mainResourceName}
                        onChange={this.changeMainResource}
                    />
                    <Scheduler
                        data={filterTasks(data, currentPriority)}
                        height={660}
                    >
                        <ViewState
                            currentDate={currentDate}
                            currentViewName={currentViewName}
                            onCurrentViewNameChange={this.currentViewNameChange}
                            onCurrentDateChange={this.currentDateChange}
                        />
                        <GroupingState
                            grouping={grouping}
                        />
                        {/* <IntegratedEditing /> */}
                        <DayView
                            startDayHour={9}
                            endDayHour={19}
                            timeTableCellComponent={DayViewTimeTableCell}
                            dayScaleCellComponent={DayViewDayScaleCell}
                            intervalCount={2}
                        />
                        {/* <EditRecurrenceMenu /> */}
                        <WeekView
                            startDayHour={9}
                            endDayHour={17}
                            excludedDays={[0, 6]}
                            name="Work Week"
                            timeTableCellComponent={WeekViewTimeTableCell}
                            dayScaleCellComponent={WeekViewDayScaleCell}
                        />
                        <MonthView />
                        <DayView
                            startDayHour={9}
                            endDayHour={19}
                        />
                        {/* <ConfirmationDialog
                    /> */}
                        <Appointments
                            basicLayoutComponent={BasicLayout}
                            textEditorComponent={TextEditor}
                            messages={messages}
                            appointmentComponent={appointmentComponent}
                        />
                        <AllDayPanel
                            cellComponent={AllDayCell}
                        />
                        {/* <DragDropProvider
                            allowDrag={allowDrag}
                        /> */}
                        <Resources
                            data={resources}
                            mainResourceName="members"
                        />
                        <IntegratedGrouping />

                        <GroupingPanel
                            cellComponent={GroupingPanelCell}
                        />
                        <Toolbar flexibleSpaceComponent={this.flexibleSpace} />
                        <DateNavigator />
                        <TodayButton />
                        <ViewSwitcher />
                        <AppointmentTooltip
                            contentComponent={TooltipContent}
                            showOpenButton
                            showCloseButton
                        />
                        <AppointmentForm />
                        {/* <DragDropProvider /> */}
                    </Scheduler>
                </Paper>
            </React.Fragment>
        );
    }
}
