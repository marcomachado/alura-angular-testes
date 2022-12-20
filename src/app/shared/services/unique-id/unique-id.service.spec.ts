import { UniqueIdService } from "./unique-id.service";

describe(UniqueIdService.name, () => {

  let service : UniqueIdService = null

  beforeEach(() => {
    service = new UniqueIdService();
  })

  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} 
  should generate id when called with prefix`, () => {
    
    const id = service.generateUniqueIdWithPrefix('app');
    expect(id.startsWith('app-')).toBeTrue()
  });

  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} should not 
  generate duplicate IDs when call multiple times`, () => {
    
    const ids = new Set()

    for(let i=0; i< 50; i++) {
      ids.add(service.generateUniqueIdWithPrefix('app'))
    }

    expect(ids.size).toEqual(50)
  })

  it(`#${UniqueIdService.prototype.getNumberOfGeneratedIds.name} should 
  return the number of generatedIds when called`, () => {
    
    service.generateUniqueIdWithPrefix('app-')
    service.generateUniqueIdWithPrefix('app-')
    expect(service.getNumberOfGeneratedIds()).toBe(2)
  })

  it(`#${UniqueIdService.prototype.getNumberOfGeneratedIds.name} should 
  throw when called with empty`, () => {
    const emptyValues = [null, '', undefined, '0','1']
    emptyValues.forEach(emptyValues => {
      expect(() => service.generateUniqueIdWithPrefix(emptyValues))
      .withContext(`Empty value: ${emptyValues}`)
      .toThrow()
    })
  })

});