import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger
} from "@/components/ui/accordion";
export default function AboutCompanyAccordion({ description }) {
	return (
		<Accordion
			type="single"
			collapsible
			className="w-full rounded-[10px] border border-solid border-[border-color] bg-card-bg px-6 py-0"
		>
			<AccordionItem value="item-1">
				<AccordionTrigger>About</AccordionTrigger>
				<AccordionContent className="text-typography-1">
					{description}
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	);
}
