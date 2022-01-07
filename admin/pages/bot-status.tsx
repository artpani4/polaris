/** @jsxRuntime classic */
/** @jsx jsx */

import React from "react";
import { PageContainer } from "@keystone-6/core/admin-ui/components";
import { jsx, Heading } from "@keystone-ui/core";
import { css } from "@emotion/react";

export default function CustomPage() {
    return (
        <PageContainer header={<Heading type="h3">Custom Page</Heading>}>
            <h1
                css={{
                    width: "100%",
                    textAlign: "center",
                }}
            >
                Bot Status Page
            </h1>
            <p css={{ textAlign: "center" }}>
                It can be accessed via the route{" "}
                <a href="/bot-status">/custom-page</a>
            </p>
        </PageContainer>
    );
}
