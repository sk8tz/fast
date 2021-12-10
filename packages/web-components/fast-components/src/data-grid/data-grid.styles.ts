import { css, ElementStyles } from "@microsoft/fast-element";
import {
    ElementDefinitionContext,
    FoundationElementDefinition,
} from "@microsoft/fast-foundation";

/**
 * Styles for Data Grid
 * @public
 */
export const dataGridStyles: (
    context: ElementDefinitionContext,
    definition: FoundationElementDefinition
) => ElementStyles = (
    context: ElementDefinitionContext,
    definition: FoundationElementDefinition
) => css`
    :host {
        display: flex;
        position: relative;
        flex-direction: column;
    }

    .container {
        background: repeating-linear-gradient(
            0deg,
            gray,
            gray 40px,
            darkgray 40px,
            darkgray 80px
        );
    }
`;
