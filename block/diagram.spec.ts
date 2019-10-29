import * as dom from "@typeup/dom"
import { Renderer } from "../Renderer"
import "./diagram"

const renderer = Renderer.create()
describe("Block.Diagram", () => {
	it("render", async () => {
		const node = new dom.block.Diagram(`// {type:sequence}\n[:Computer]sendUnsentEmail>[:Server]\n[:Computer]newEmail>[:Server]\n[:Server]reponse.>[:Computer]\n[:Computer]downloadEmail>[:Server]\n[:Computer]deleteOldEmail>[:Server]\n`, [new dom.inline.Text("Alice to Bob.")])
		expect(await renderer.render(node)).toEqual('<figure>\n\t\t<svg xmlns="http://www.w3.org/2000/svg" width="275.5" height="326"><defs><marker id="arrow-filled" refX="6" refY="3" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 6,3 0,6z" stroke="none" stroke-width="1" fill="#000"></path></marker><marker id="arrow-open" refX="6" refY="3" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 6,3 0,6" stroke="#000" stroke-width="1" fill="#000"></path></marker></defs><rect width="96.5" height="38" stroke="#000" stroke-width="1" fill="none" x="10" y="20"></rect><g><text fill="#000" font-family="Helvetica,sans-Serif" x="58.25" y="39" text-anchor="middle" alignment-baseline="central">:Computer</text></g><rect width="96.5" height="38" stroke="#000" stroke-width="1" fill="none" x="10" y="268"></rect><g><text fill="#000" font-family="Helvetica,sans-Serif" x="58.25" y="287" text-anchor="middle" alignment-baseline="central">:Computer</text></g><path d="M58.25,58 v210" stroke="#000" stroke-width="1" fill="none"></path><rect width="79.5" height="38" stroke="#000" stroke-width="1" fill="none" x="166" y="20"></rect><g><text fill="#000" font-family="Helvetica,sans-Serif" x="205.75" y="39" text-anchor="middle" alignment-baseline="central">:Server</text></g><rect width="79.5" height="38" stroke="#000" stroke-width="1" fill="none" x="166" y="268"></rect><g><text fill="#000" font-family="Helvetica,sans-Serif" x="205.75" y="287" text-anchor="middle" alignment-baseline="central">:Server</text></g><path d="M205.75,58 v210" stroke="#000" stroke-width="1" fill="none"></path><g><text fill="#000" font-family="Helvetica,sans-Serif" x="132" y="83" text-anchor="middle" alignment-baseline="central">sendUnsentEmail</text></g><path d="M58.25,96 h147.5" stroke="#000" stroke-width="1" fill="none" marker-end="url(#arrow-filled)"></path><g><text fill="#000" font-family="Helvetica,sans-Serif" x="132" y="121" text-anchor="middle" alignment-baseline="central">newEmail</text></g><path d="M58.25,134 h147.5" stroke="#000" stroke-width="1" fill="none" marker-end="url(#arrow-filled)"></path><g><text fill="#000" font-family="Helvetica,sans-Serif" x="132" y="159" text-anchor="middle" alignment-baseline="central">reponse</text></g><path d="M205.75,172 h-147.5" stroke="#000" stroke-width="1" fill="none" stroke-dasharray="7,4" marker-end="url(#arrow-filled)"></path><g><text fill="#000" font-family="Helvetica,sans-Serif" x="132" y="197" text-anchor="middle" alignment-baseline="central">downloadEmail</text></g><path d="M58.25,210 h147.5" stroke="#000" stroke-width="1" fill="none" marker-end="url(#arrow-filled)"></path><g><text fill="#000" font-family="Helvetica,sans-Serif" x="132" y="235" text-anchor="middle" alignment-baseline="central">deleteOldEmail</text></g><path d="M58.25,248 h147.5" stroke="#000" stroke-width="1" fill="none" marker-end="url(#arrow-filled)"></path></svg>\n\t\t<figcaption></figcaption>\n\t</figure>\n\t')
	})
})
