import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Proyecto, ProyectoRelations} from '../models';

export class ProyectoRepository extends DefaultCrudRepository<
  Proyecto,
  typeof Proyecto.prototype.idProyecto,
  ProyectoRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Proyecto, dataSource);
  }
}
