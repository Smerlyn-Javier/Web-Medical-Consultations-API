import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { RoleController } from './role/role.controller';
import { RoleService } from './role/role.service';
import { RoleModule } from './role/role.module';
import { StatusController } from './status/status.controller';
import { StatusService } from './status/status.service';
import { StatusModule } from './status/status.module';
import { SymptomController } from './symptom/symptom.controller';
import { SymptomModule } from './symptom/symptom.module';
import { SymptomService } from './symptom/symptom.service';
import { PacientController } from './pacient/pacient.controller';
import { PacientService } from './pacient/pacient.service';
import { PacientModule } from './pacient/pacient.module';
import { HealtInsuranceController } from './healt-insurance/healt-insurance.controller';
import { HealtInsuranceService } from './healt-insurance/healt-insurance.service';
import { HealtInsuranceModule } from './healt-insurance/healt-insurance.module';
import { MedicController } from './medic/medic.controller';
import { MedicService } from './medic/medic.service';
import { MedicModule } from './medic/medic.module';
import { DoctorOfficeController } from './doctor-office/doctor-office.controller';
import { DoctorOfficeService } from './doctor-office/doctor-office.service';
import { DoctorOfficeModule } from './doctor-office/doctor-office.module';
import { ScheduleController } from './schedule/schedule.controller';
import { ScheduleService } from './schedule/schedule.service';
import { ScheduleModule } from './schedule/schedule.module';
import { SpecialtyController } from './specialty/specialty.controller';
import { SpecialtyService } from './specialty/specialty.service';
import { SpecialtyModule } from './specialty/specialty.module';
import { PharmacyController } from './pharmacy/pharmacy.controller';
import { PharmacyService } from './pharmacy/pharmacy.service';
import { PharmacyModule } from './pharmacy/pharmacy.module';
import { AssociatedPharmacyController } from './associated-pharmacy/associated-pharmacy.controller';
import { AssociatedPharmacyService } from './associated-pharmacy/associated-pharmacy.service';
import { AssociatedPharmacyModule } from './associated-pharmacy/associated-pharmacy.module';
import { PriceController } from './price/price.controller';
import { PriceService } from './price/price.service';
import { PriceModule } from './price/price.module';
import { AppointmentService } from './appointment/appointment.service';
import { AppointmentModule } from './appointment/appointment.module';
import { ChargeMedicalConsultationController } from './charge-medical-consultation/charge-medical-consultation.controller';
import { ChargeMedicalConsultationService } from './charge-medical-consultation/charge-medical-consultation.service';
import { ChargeMedicalConsultationModule } from './charge-medical-consultation/charge-medical-consultation.module';
import { CardInfoController } from './card-info/card-info.controller';
import { CardInfoService } from './card-info/card-info.service';
import { CardInfoModule } from './card-info/card-info.module';
import { MedicalHistoryController } from './medical-history/medical-history.controller';
import { MedicalHistoryService } from './medical-history/medical-history.service';
import { MedicalHistoryModule } from './medical-history/medical-history.module';
import { MedicalProcedureController } from './medical-procedure/medical-procedure.controller';
import { MedicalProcedureService } from './medical-procedure/medical-procedure.service';
import { MedicalProcedureModule } from './medical-procedure/medical-procedure.module';
import { MedicalShiftController } from './medical-shift/medical-shift.controller';
import { MedicalShiftModule } from './medical-shift/medical-shift.module';
import { MedicalShiftService } from './medical-shift/medical-shift.service';
import { MedicineController } from './medicine/medicine.controller';
import { MedicineService } from './medicine/medicine.service';
import { MedicineModule } from './medicine/medicine.module';
import { MedicineComponentController } from './medicine-component/medicine-component.controller';
import { MedicineComponentService } from './medicine-component/medicine-component.service';
import { MedicineComponentModule } from './medicine-component/medicine-component.module';
import { PaymentMethodController } from './payment-method/payment-method.controller';
import { PaymentMethodService } from './payment-method/payment-method.service';
import { PaymentMethodModule } from './payment-method/payment-method.module';
import { PrescriptionController } from './prescription/prescription.controller';
import { PrescriptionService } from './prescription/prescription.service';
import { PrescriptionModule } from './prescription/prescription.module';



@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://smerlyn88:kQ5EO7qemmB8VtM6@cluster0.z3wbt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'),
    UserModule,
    RoleModule,
    StatusModule,
    SymptomModule,
    PacientModule,
    HealtInsuranceModule,
    MedicModule,
    DoctorOfficeModule,
    ScheduleModule,
    SpecialtyModule,
    PharmacyModule,
    AssociatedPharmacyModule,
    PriceModule,
    AppointmentModule,
    ChargeMedicalConsultationModule,
    CardInfoModule,
    MedicalHistoryModule,
    MedicalProcedureModule,
    MedicalShiftModule,
    MedicineModule,
    MedicineComponentModule,
    PaymentMethodModule,
    PrescriptionModule,
  ],
  controllers: [AppController, UserController, RoleController, StatusController, SymptomController, PacientController, HealtInsuranceController, MedicController, DoctorOfficeController, ScheduleController, SpecialtyController, PharmacyController, AssociatedPharmacyController, PriceController, ChargeMedicalConsultationController, CardInfoController, MedicalHistoryController, MedicalProcedureController, MedicalShiftController,MedicalShiftController, MedicineController, MedicineComponentController, PaymentMethodController, PrescriptionController],
  providers: [AppService, UserService, RoleService, StatusService,SymptomService, PacientService, HealtInsuranceService, MedicService, DoctorOfficeService, ScheduleService, SpecialtyService, PharmacyService, AssociatedPharmacyService, PriceService, AppointmentService, ChargeMedicalConsultationService, CardInfoService, MedicalHistoryService, MedicalProcedureService,MedicalShiftService, MedicineService, MedicineComponentService, PaymentMethodService,  PrescriptionService],
})
export class AppModule { }
