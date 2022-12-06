import { HStack, Input, Select, Stack } from '@chakra-ui/react'
import { rentCars } from '../../store/servicesStore/rentCars'
import { Service } from '../../store/servicesStore/servicesTypes'
import { DocumentationBonus } from '../services/documentationBonus'
import { Towing } from '../services/towing'
import { ServiceListItem } from './serviceListItem/serviceListItem'

type Props = {
  services: Service[]
}
export const PickedServiceList = ({ services }: Props) => {
  return (
    <Stack overflowY="auto" shadow="dark-lg" rounded="xl" flex="1" h="100%" bg="chakra-subtle-bg">
      <DocumentationBonus />
      <Towing />
      <ServiceListItem
        service={{
          active: true,
          badges: ['przed naprawą'],
          price: 100,
          title: 'Auto zastępcze',
          preventCombineGroup: null,
          serviceType: 'before repair',
        }}
        textToCopy={`KLASA A AUTO ZASTĘPCZE NA 12 DNI X STAWKA 240 zł netto za dobę = 2880 zł
`}
      >
        <Select flex={'0 0 400px'} placeholder="Wybierz model">
          {rentCars.map((car) => (
            <option key={car.name} value={car.name}>
              {car.name}
            </option>
          ))}
        </Select>
      </ServiceListItem>
      <ServiceListItem
        service={{
          active: true,
          badges: ['przed naprawą'],
          price: 100,
          title: 'Dojazd do miejsca awarii',
          preventCombineGroup: null,
          serviceType: 'before repair',
        }}
        textToCopy={`CZAS PRACY MECHANIKA 1 h X STAWKA GWR 210 zł/h +50 KM X 5,85zł netto = 502,5 zł
`}
      >
        <HStack>
          <Input placeholder="RBH" type="number" />
          <Input placeholder="stawka" type="number" />
        </HStack>
      </ServiceListItem>
      <ServiceListItem
        service={{
          active: true,
          badges: ['po naprawie', 'ryczałt'],
          price: 100,
          title: 'Bonus za naprawę na miejscu',
          preventCombineGroup: null,
          serviceType: 'after repair',
        }}
        textToCopy="Bonus 100 zł za naprawę na miejscu"
      />
      <ServiceListItem
        service={{
          active: true,
          badges: ['po naprawie', 'ryczałt'],
          price: 100,
          title: 'Odwiezienie pojazdu',
          preventCombineGroup: null,
          serviceType: 'after repair',
        }}
        textToCopy="Odwiezienie pojazdu klienta do 50 km 300 zł netto
"
      />
      <ServiceListItem
        service={{
          active: true,
          badges: ['po naprawie'],
          price: 100,
          title: 'Odwiezienie pojazdu',
          preventCombineGroup: null,
          serviceType: 'after repair',
        }}
        textToCopy={`OPŁATA MANIPULACYJNA = 60,03 EURO NETTO  x KURS 0 = 0,00 zł
OPŁATA ZA ODLEGŁOŚĆ 1,41 EUR/km NETTO X 51 km x KURS 0 = 0,00 zł NETTO
RAZEM = 0,00 ZL NETTO
`}
      />
    </Stack>
  )
}
