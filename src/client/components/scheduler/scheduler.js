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
    Month,
} from '@syncfusion/ej2-react-schedule';
import './external-drag-drop.css';
import { extend, closest, remove, addClass } from '@syncfusion/ej2-base';
import { SampleBase } from '../scheduler/sample-base';
import { TreeViewComponent } from '@syncfusion/ej2-react-navigations';
import { appointments, resourcesData } from '../scheduler/appointments';
import { connect } from 'react-redux';
import axios from 'axios';

var usuario = localStorage.getItem('usuario');

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
        this.reminderData = [
            { Id: 1, Text: 'Commande par IV3A', StartTime: '3 jours', EndTime: '',IsAllDay: '', Description: 'Avec sélection véhicule', DepartmentID: 'PT',Designation: 'Comercial' },
            { Id: 2, Text: 'Vérification par IV3A', StartTime: '3 jours', EndTime: '',IsAllDay: '', Description: 'Commande/Fiche Client', DepartmentID: 'IV3A',Designation: '' },
            { Id: 3, Text: 'Signalement par IV3A', StartTime: '3 jours', EndTime: '',IsAllDay: '', Description: 'Nouvelle Commande', DepartmentID: 'IV3A',Designation: '' },
            { Id: 4, Text: 'Vérifier de disposition', StartTime: '3 jours', EndTime: '',IsAllDay: '', Description: 'Réservation á RRG', DepartmentID: 'PT',Designation: '' },
            { Id: 5, Text: 'Proposition ', StartTime: '3 jours', EndTime: '',IsAllDay: '', Description: 'Véhicule équivalent', DepartmentID: 'PT',Designation: '' },
            { Id: 6, Text: 'Confirmation disponib.', StartTime: '3 jours', EndTime: '',IsAllDay: '', Description: 'Génération proforma ', DepartmentID: 'PT',Designation: '' },        
        ];
        this.dataSource = { readRequest: this.state, editingFollowingEvents: true };
    }
    onDragStart(args) {
        args.navigation = { enable: true, timeDelay: 4000 };
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
    return (<div id="waiting">{props.Id}<div id="waitdetails">{props.Text} - {props.StartTime}<div id="waitlist"></div>
            <div id="waiting">{props.DepartmentID} - {props.Description}</div></div></div>);
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
            const filteredPeople = treeViewdata.filter((item) => item.id !== parseInt(this.draggedItemId, 10));
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
                    const filteredData = treeviewData.filter((item) => item.id === parseInt(event.draggedNodeData.id, 10));
                    let cellData = this.scheduleObj.getCellDetails(event.target);
                    let resourceDetails = this.scheduleObj.getResourcesByIndex(cellData.groupIndex);
                    let eventData = {
                        Text: filteredData.text,
                        StartTime: cellData.startTime,
                        EndTime: cellData.endTime,
                        IsAllDay: cellData.isAllDay,
                        Description: filteredData.Description,                       
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
                            <h1 className="title-text">Nominations de l'employeur</h1>
                        </div>
                        <ScheduleComponent
                            ref={schedule => this.scheduleObj = schedule}
                            cssClass='schedule-drag-drop'
                            width='100%' height='650px'
                            selectedDate={new Date(2020, 9, 1)}
                            currentView='TimelineDay'
                            resourceHeaderTemplate={this.resourceHeaderTemplate.bind(this)}
                            eventSettings={{
                                dataSource: this.data,
                                fields: {
                                    subject: { title: 'Client Name', name: 'Name' },
                                    startTime: { title: "From", name: "StartTime" },
                                    endTime: { title: "To", name: "EndTime" },
                                    description: { title: 'Reason', name: 'Description' }
                                }
                            }}
                            group={{ enableCompactView: false, resources: ['Departments', 'Consultants'] }}
                            actionBegin={this.onActionBegin.bind(this)}
                            drag={this.onItemDrag.bind(this)}>
                            <ResourcesDirective>
                                <ResourceDirective
                                    field='DepartmentID'
                                    title='Department' name='Departments'
                                    allowMultiple={false}
                                    dataSource={this.departmentData}
                                    textField='Text'
                                    idField='Id'
                                    colorField='Color'>
                                </ResourceDirective>
                                <ResourceDirective
                                    field='ConsultantID'
                                    title='Consultant'
                                    name='Consultants'
                                    allowMultiple={false}
                                    dataSource={this.consultantData}
                                    textField='Text'
                                    idField='Id'
                                    groupIDField="GroupId"
                                    colorField='Color'>
                                </ResourceDirective>
                            </ResourcesDirective>
                            <ViewsDirective>
                                <ViewDirective option='TimelineDay' />
                                <ViewDirective option='TimelineMonth' />
                                <ViewDirective option='Month' />
                                <ViewDirective option='WorkWeek' />
                                <ViewDirective option='Agenda' />
                            </ViewsDirective>
                            <Inject services={[TimelineViews, TimelineMonth, Resize, DragAndDrop, Agenda, Day, Month, WorkWeek]} />
                        </ScheduleComponent>
                    </div>
                    <div className="treeview-container">
                        <div className="title-container">
                            <h1 className="title-text">Liste d'attente</h1>
                        </div>
                        <TreeViewComponent ref={tree => this.treeObj = tree}
                            cssClass='treeview-external-drag'
                            nodeTemplate={this.treeTemplate.bind(this)}
                            fields={{
                                dataSource: this.reminderData,
                                fields: {
                                    Text: this.reminderData.text,
                                    StartTime: this.reminderData.startTime,
                                    EndTime: this.reminderData.endTime,
                                    IsAllDay: this.reminderData.isAllDay,
                                    Description: this.reminderData.Description,
                                    DepartmentID: this.reminderData.GroupId,
                                    ConsultantID: this.reminderData.Id
                                }
                            }}
                            dragStart={(this.onDragStart.bind(this))}
                            nodeDragStop={this.onTreeDragStop.bind(this)}
                            nodeDragging={this.onItemDrag.bind(this)}
                            eventSettings={this.reminderData}
                            dataSource={this.reminderData}
                            allowDragAndDrop={this.allowDragAndDrops}>
                        </TreeViewComponent>
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

export default connect(mapStateToProps)(Scheduler)