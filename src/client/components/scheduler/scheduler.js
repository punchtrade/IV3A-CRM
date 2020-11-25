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
    teal, indigo,green,orange
} from '@material-ui/core/colors';
import { connect } from 'react-redux';


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
const priorityData = [
    { text: 'Low Priority', id: 1, color: green },
    { text: 'High Priority', id: 2, color: orange },
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
    { text: 'Room 1', id: 1 },
    { text: 'Room 2', id: 2 },
];

const SHIFT_KEY = 16;

class Calendar extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            data: appointments, recurrenceAppointments, appointmentsMonth, resourcesData,
            currentViewName: 'work-week',
            currentDate: '2018-06-27',
            mainResourceName: 'members',
            isShiftPressed: false,
            resources: [{
                fieldName: 'members',
                title: 'Members',
                instances: owners,
                allowMultiple: true,
            }, {
                fieldName: 'roomId',
                title: 'Location',
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