import {
  Button,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react'
import { numberToOutputCurrencyString } from '../../helpers/numberToOutputCurrencyString'
import { useServicesStore } from '../../store/servicesStore/servicesStore'

type Props = {
  isOpen: boolean
  onClose: () => void
}

type ServiceRowProps = {
  service: {
    title: string
    price: number
  }
}

const ServiceRow = ({ service }: ServiceRowProps) => {
  const formattedPrice = numberToOutputCurrencyString(service.price)

  return (
    <HStack w='100%' justifyContent='space-between' gap='8px'>
      <span>{service.title}</span>
      <span>{formattedPrice}</span>
    </HStack>
  )
}

export const SummaryModal = ({ isOpen, onClose }: Props) => {
  const services = useServicesStore((state) => state.services).filter((service) => service.active && service.price > 0)

  return (
    <Modal isCentered motionPreset='slideInBottom' size='xl' isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Podsumowanie usług</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {services.map((service) => (
            <ServiceRow key={service.id} service={service} />
          ))}
        </ModalBody>
        <ModalFooter>
          <Button>Drukuj</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
