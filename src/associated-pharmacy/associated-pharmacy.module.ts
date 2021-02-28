import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AssociatedPharmacy, AssociatedPharmacySchema } from 'src/schema/associatedPharmacy.schema';
import { AssociatedPharmacyController } from './associated-pharmacy.controller';
import { AssociatedPharmacyService } from './associated-pharmacy.service';

@Module({
    imports:[MongooseModule.forFeature([{name:AssociatedPharmacy.name,schema:AssociatedPharmacySchema}])],
    providers:[AssociatedPharmacyService],
    controllers:[AssociatedPharmacyController],
    exports:[MongooseModule]
})
export class AssociatedPharmacyModule {}
