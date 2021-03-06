import * as dom from "@typeup/dom"
import { Renderer, addRenderer } from "../Renderer"

async function render(renderer: Renderer, me: dom.block.Math): Promise<string> {
	// return math.typeset("inline-TeX", "a^2 + b^2 = c^2" ?? me.value)
	return `<figure>$$${ me.value }$$<figcaption>${ await renderer.render(me.content) }</figcaption></figure>`
}
addRenderer("Block.Math", render)
