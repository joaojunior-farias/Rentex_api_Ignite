import { Specification } from "../../models/Specification";
import { ICreateSpecificationDTO, ISpecificationsRepository } from "../ISpecificationsRepository";


class SpecificationsRepository implements ISpecificationsRepository{
    private specifications: Specification[];


    private static INSTANCE: SpecificationsRepository;

    constructor() {
        this.specifications = [];
    }

    public static getInstance(): SpecificationsRepository {
        if(!SpecificationsRepository.INSTANCE){
            SpecificationsRepository.INSTANCE = new SpecificationsRepository();
        }

        return SpecificationsRepository.INSTANCE;
    }


    create({ name, description }: ICreateSpecificationDTO): void {
        const newSpecification = new Specification();

        Object.assign(newSpecification, {
            name,
            description,
            created_at: new Date()
        });

        this.specifications.push(newSpecification);
    }

    list(): Specification[] {
        return this.specifications;
    }

    findByName(name: string): Specification {
        const specification = this.specifications.find(specification => specification.name === name);

        return specification;

    }
}

export { SpecificationsRepository }