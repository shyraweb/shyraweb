// Component Properties Panel
import { FC, ChangeEvent } from "react";
import { ComponentPropertiesProps } from "@/types/editor";
import dynamic from "next/dynamic";

const PropertyInput = dynamic(
  () => import("@/components/Editor/Properties/PropertyInput")
);

const ComponentProperties: FC<ComponentPropertiesProps> = ({
  component,
  onUpdateProps,
}) => {
  const handlePropChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    onUpdateProps(component.id, { [name]: value });
  };

  const renderProperties = () => {
    switch (component.type) {
      case "header":
        return (
          <PropertyInput
            label="Logo Text"
            name="logoText"
            value={component.props.logoText || ""}
            onChange={handlePropChange}
          />
        );
      case "hero-section":
        return (
          <>
            <PropertyInput
              label="Title"
              name="title"
              value={component.props.title || ""}
              onChange={handlePropChange}
            />
            <PropertyInput
              label="Subtitle"
              name="subtitle"
              value={component.props.subtitle || ""}
              onChange={handlePropChange}
            />
            <PropertyInput
              label="Button Text"
              name="buttonText"
              value={component.props.buttonText || ""}
              onChange={handlePropChange}
            />
          </>
        );
      case "card":
        return (
          <>
            <PropertyInput
              label="Card Title"
              name="cardTitle"
              value={component.props.cardTitle || ""}
              onChange={handlePropChange}
            />
            <PropertyInput
              label="Card Content"
              name="cardContent"
              value={component.props.cardContent || ""}
              onChange={handlePropChange}
              type="textarea"
            />
            <PropertyInput
              label="Button Text"
              name="buttonText"
              value={component.props.buttonText || ""}
              onChange={handlePropChange}
            />
          </>
        );
      case "blog":
        return (
          <PropertyInput
            label="Heading"
            name="heading"
            value={component.props.heading || ""}
            onChange={handlePropChange}
          />
        );
      case "review":
        return (
          <>
            <PropertyInput
              label="Review Text"
              name="reviewText"
              value={component.props.reviewText || ""}
              onChange={handlePropChange}
              type="textarea"
            />
            <PropertyInput
              label="Author"
              name="author"
              value={component.props.author || ""}
              onChange={handlePropChange}
            />
          </>
        );
      case "testimonials":
        return (
          <>
            <PropertyInput
              label="Heading"
              name="heading"
              value={component.props.heading || ""}
              onChange={handlePropChange}
            />
            <PropertyInput
              label="Quote"
              name="quote"
              value={component.props.quote || ""}
              onChange={handlePropChange}
              type="textarea"
            />
            <PropertyInput
              label="Author"
              name="author"
              value={component.props.author || ""}
              onChange={handlePropChange}
            />
          </>
        );
      case "pricing":
        return (
          <PropertyInput
            label="Heading"
            name="heading"
            value={component.props.heading || ""}
            onChange={handlePropChange}
          />
        );
      case "form":
        return (
          <PropertyInput
            label="Heading"
            name="heading"
            value={component.props.heading || ""}
            onChange={handlePropChange}
          />
        );
      case "login":
        return (
          <PropertyInput
            label="Heading"
            name="heading"
            value={component.props.heading || ""}
            onChange={handlePropChange}
          />
        );
      case "sign-up":
        return (
          <PropertyInput
            label="Heading"
            name="heading"
            value={component.props.heading || ""}
            onChange={handlePropChange}
          />
        );
      case "checkout":
        return (
          <PropertyInput
            label="Heading"
            name="heading"
            value={component.props.heading || ""}
            onChange={handlePropChange}
          />
        );
      case "dashboard":
        return (
          <PropertyInput
            label="Heading"
            name="heading"
            value={component.props.heading || ""}
            onChange={handlePropChange}
          />
        );
      case "notifications":
        return (
          <PropertyInput
            label="Heading"
            name="heading"
            value={component.props.heading || ""}
            onChange={handlePropChange}
          />
        );
      case "settings":
        return (
          <PropertyInput
            label="Heading"
            name="heading"
            value={component.props.heading || ""}
            onChange={handlePropChange}
          />
        );
      case "faq":
        return (
          <PropertyInput
            label="Heading"
            name="heading"
            value={component.props.heading || ""}
            onChange={handlePropChange}
          />
        );
      case "contact-us":
        return (
          <PropertyInput
            label="Heading"
            name="heading"
            value={component.props.heading || ""}
            onChange={handlePropChange}
          />
        );
      case "sidebar":
        return (
          <PropertyInput
            label="Heading"
            name="heading"
            value={component.props.heading || ""}
            onChange={handlePropChange}
          />
        );
      case "footer":
        return (
          <PropertyInput
            label="Copyright Text"
            name="copyrightText"
            value={component.props.copyrightText || ""}
            onChange={handlePropChange}
          />
        );
      default:
        return (
          <p className="text-gray-500 text-sm">
            No customizable properties for this component.
          </p>
        );
    }
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-700">
        Editing:{" "}
        {component.name || component.type.replace(/([A-Z])/g, " $1").trim()}
      </h3>
      <p className="text-sm text-gray-500">Sample: {component._id}</p>
      {renderProperties()}
    </div>
  );
};

export default ComponentProperties;
