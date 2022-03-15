import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Usuario, UsuarioRelations, Educacion, Proyecto, Habilidad, Experiencia} from '../models';
import {EducacionRepository} from './educacion.repository';
import {ProyectoRepository} from './proyecto.repository';
import {HabilidadRepository} from './habilidad.repository';
import {ExperienciaRepository} from './experiencia.repository';

export class UsuarioRepository extends DefaultCrudRepository<
  Usuario,
  typeof Usuario.prototype.idUsuario,
  UsuarioRelations
> {

  public readonly educacions: HasManyRepositoryFactory<Educacion, typeof Usuario.prototype.idUsuario>;

  public readonly proyectos: HasManyRepositoryFactory<Proyecto, typeof Usuario.prototype.idUsuario>;

  public readonly habilidads: HasManyRepositoryFactory<Habilidad, typeof Usuario.prototype.idUsuario>;

  public readonly experiencias: HasManyRepositoryFactory<Experiencia, typeof Usuario.prototype.idUsuario>;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource, @repository.getter('EducacionRepository') protected educacionRepositoryGetter: Getter<EducacionRepository>, @repository.getter('ProyectoRepository') protected proyectoRepositoryGetter: Getter<ProyectoRepository>, @repository.getter('HabilidadRepository') protected habilidadRepositoryGetter: Getter<HabilidadRepository>, @repository.getter('ExperienciaRepository') protected experienciaRepositoryGetter: Getter<ExperienciaRepository>,
  ) {
    super(Usuario, dataSource);
    this.experiencias = this.createHasManyRepositoryFactoryFor('experiencias', experienciaRepositoryGetter,);
    this.registerInclusionResolver('experiencias', this.experiencias.inclusionResolver);
    this.habilidads = this.createHasManyRepositoryFactoryFor('habilidads', habilidadRepositoryGetter,);
    this.registerInclusionResolver('habilidads', this.habilidads.inclusionResolver);
    this.proyectos = this.createHasManyRepositoryFactoryFor('proyectos', proyectoRepositoryGetter,);
    this.registerInclusionResolver('proyectos', this.proyectos.inclusionResolver);
    this.educacions = this.createHasManyRepositoryFactoryFor('educacions', educacionRepositoryGetter,);
    this.registerInclusionResolver('educacions', this.educacions.inclusionResolver);
  }
}
